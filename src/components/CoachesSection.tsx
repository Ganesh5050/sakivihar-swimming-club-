import { Award, Users, Trophy, Target, Clock, Star, Waves, Medal } from 'lucide-react';
import Typewriter from '@/components/Typewriter';

const CoachesSection = () => {
  const coaches = [
    {
      name: 'Rajesh Kumar',
      title: 'Head Coach & Director',
      experience: '15+ Years',
      specialization: 'Competitive Swimming',
      achievements: 'Former National Champion',
      certifications: ['Level 4 Swimming Coach', 'Water Safety Instructor', 'First Aid Certified'],
      description: 'Swimming is not just about technique—it\'s about building character, discipline, and the determination to excel. Every swimmer who joins our club becomes part of our family, and we\'re committed to helping them achieve their dreams.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      expertise: ['Freestyle', 'Butterfly', 'Competitive Training', 'Technique Development']
    }
  ];

  const CoachCard = ({ coach, index }: { coach: any; index: number }) => (
    <div 
      className="glass-card p-8 team-card"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <div className="relative">
          <img 
            src={coach.image} 
            alt={coach.name}
            className="w-full aspect-square object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-primary/20 rounded-2xl"></div>
          <div className="absolute -inset-2 bg-gradient-primary/20 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
        </div>
        
        <div className="md:col-span-2 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-primary-foreground mb-2">
              {coach.name}
            </h3>
            <p className="text-secondary font-semibold text-lg mb-1">
              {coach.title}
            </p>
            <div className="flex items-center space-x-2 mb-3">
              <Award className="h-4 w-4 text-secondary" />
              <p className="text-primary-foreground font-medium">{coach.achievements}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Experience</p>
              <p className="text-primary-foreground font-semibold">{coach.experience}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Specialization</p>
              <p className="text-primary-foreground font-semibold">{coach.specialization}</p>
            </div>
          </div>

          {/* Expertise Tags */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Expertise</p>
            <div className="flex flex-wrap gap-2">
              {coach.expertise.map((skill: string, skillIndex: number) => (
                <span 
                  key={skillIndex}
                  className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-medium rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Certifications</p>
            <div className="space-y-1">
              {coach.certifications.map((cert: string, certIndex: number) => (
                <div key={certIndex} className="flex items-center space-x-2">
                  <Medal className="h-3 w-3 text-secondary" />
                  <span className="text-sm text-primary-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-muted-foreground leading-relaxed text-sm italic">
            "{coach.description}"
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="coaches" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-underwater opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 glass-card rounded-full mb-6">
            <Users className="h-8 w-8 text-secondary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            <Typewriter 
              words={['Our Coaches', 'Meet Our Team', 'Expert Trainers', 'Professional Staff']}
              delay={3000}
              typeSpeed={130}
              deleteSpeed={65}
              className="text-primary-foreground"
            />
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet our experienced and certified coaching team dedicated to helping you achieve 
            your swimming goals and reach new heights in aquatic excellence.
          </p>
        </div>

        {/* Coaching Philosophy */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card p-8 text-center team-card">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-primary rounded-full mr-4">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground">Our Coaching Philosophy</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              At SakiVihar Complex Swimming Club, we believe that great swimmers are made through 
              personalized attention, scientific training methods, and unwavering dedication. Our coaches 
              combine years of competitive experience with modern coaching techniques to bring out the 
              best in every swimmer, regardless of their starting level.
            </p>
          </div>
        </div>

        {/* Coaches Grid */}
        <div className="space-y-12">
          {coaches.map((coach, index) => (
            <CoachCard key={coach.name} coach={coach} index={index} />
          ))}
        </div>

        {/* Training Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, value: '500+', label: 'Swimmers Trained' },
            { icon: Trophy, value: '50+', label: 'Championships Won' },
            { icon: Star, value: '15+', label: 'Years Experience' },
            { icon: Medal, value: '100+', label: 'Medals Earned' },
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="glass-card p-6 text-center team-card"
              style={{ animationDelay: `${(index + 3) * 150}ms` }}
            >
              <stat.icon className="h-8 w-8 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
