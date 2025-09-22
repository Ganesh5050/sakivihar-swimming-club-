import { useState } from 'react';
import { Play, X, Calendar } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Typewriter from '@/components/Typewriter';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryItems = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=300&fit=crop',
      alt: 'Swimming Pool Training Session',
      category: 'training',
      date: 'Dec 2024'
    },
    {
      type: 'video', 
      src: 'https://www.youtube.com/embed/Tzm6TEManmQ',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      alt: 'Training Session Highlights',
      category: 'training',
      date: 'Nov 2024'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop',
      alt: 'Professional Swimming Pool Facilities',
      category: 'facilities',
      date: 'Oct 2024'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
      alt: 'Junior Swimmers Training',
      category: 'training',
      date: 'Oct 2024'
    },
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/Tzm6TEManmQ', 
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      alt: 'Swimming Championship Highlights',
      category: 'competitions',
      date: 'Sep 2024'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      alt: 'Swimming Competition Event',
      category: 'events',
      date: 'Aug 2024'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop',
      alt: 'Professional Coach Training',
      category: 'training', 
      date: 'Aug 2024'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
      alt: 'Swimming Team Building',
      category: 'events',
      date: 'Jul 2024'
    }
  ];

  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Media' },
    { id: 'competitions', label: 'Competitions' },
    { id: 'training', label: 'Training' },
    { id: 'events', label: 'Events' },
    { id: 'facilities', label: 'Facilities' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const GalleryItem = ({ item, index }: { item: any, index: number }) => (
    <div 
      className="relative group cursor-pointer overflow-hidden rounded-xl team-card"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => item.type === 'image' && setSelectedImage(item.src)}
    >
      <div className="aspect-[4/3] relative">
        {item.type === 'video' ? (
          <div className="w-full h-full bg-gradient-primary rounded-xl flex items-center justify-center relative">
            <Play className="h-16 w-16 text-primary-foreground opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors rounded-xl"></div>
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-primary rounded-xl"></div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-semibold text-sm mb-1">{item.alt}</h3>
            <div className="flex items-center text-secondary text-xs">
              <Calendar className="h-3 w-3 mr-1" />
              {item.date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="gallery" className="py-20 bg-gradient-underwater">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-float">
            <Typewriter 
              words={['Photo & Video Gallery', 'Our Memories', 'Training Moments', 'Championship Highlights']}
              delay={3500}
              typeSpeed={140}
              deleteSpeed={70}
              className="text-primary-foreground"
            />
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Explore moments of excellence, training sessions, competitions, and memorable events
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                  activeFilter === filter.id
                    ? 'bg-secondary text-secondary-foreground glow-button'
                    : 'glass-card text-primary-foreground hover:bg-secondary/20'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <GalleryItem key={index} item={item} index={index} />
          ))}
        </div>

        {/* Lightbox Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl bg-black/90 border-glass-border/30 p-2">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 text-white hover:text-secondary transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            {selectedImage && (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full max-h-[80vh] bg-gradient-primary rounded-xl"></div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;