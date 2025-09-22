import { Play, Award, Users, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Typewriter from '@/components/Typewriter';

const HeroSection = () => {

  const stats = [
    { icon: Users, value: '200+', label: 'Active Members' },
    { icon: Trophy, value: '25+', label: 'Championships Won' },
    { icon: Award, value: '15+', label: 'Years Experience' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {/* YouTube Video Background */}
        <div className="relative w-full h-full overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube.com/embed/Tzm6TEManmQ?autoplay=1&mute=1&loop=1&playlist=Tzm6TEManmQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&start=0&end=0"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            style={{ border: 'none' }}
            title="SakiVihar Swimming Club Background Video"
            loading="eager"
          />
        </div>
        
        {/* Minimal Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Water Ripples */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-2 border-secondary/30 animate-ping"></div>
          <div className="absolute top-3/4 right-1/3 w-24 h-24 rounded-full border-2 border-secondary/20 animate-ping animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-2/3 w-40 h-40 rounded-full border-2 border-secondary/25 animate-ping animation-delay-2000"></div>
        </div>
      </div>

              {/* Hero Content */}
              <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6 tracking-tight">
              <span className="block">SakiVihar Complex</span>
              <span className="block bg-gradient-primary bg-clip-text text-transparent animate-underwater">
                <Typewriter 
                  words={['Swimming Club', 'Championship Training', 'Aquatic Excellence', 'Swimming Academy']}
                  delay={2000}
                  typeSpeed={150}
                  deleteSpeed={75}
                  className="bg-gradient-primary bg-clip-text text-transparent"
                />
              </span>
            </h1>
          
          <div className="text-base sm:text-lg md:text-xl text-secondary font-medium mb-3 sm:mb-4 animate-underwater">
            Andheri East, Sakinaka
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-6 sm:mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            Building Champions On and Off the Pool
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-primary-foreground/70 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Where passion meets excellence. Join Mumbai's premier swimming club and dive into a world of 
            professional training, championship victories, and lifelong friendships.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
          <Button 
            className="glow-button text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 animate-splash hover:animate-splash w-full sm:w-auto"
            onClick={() => {
              // Direct WhatsApp integration with pre-filled message
              const message = encodeURIComponent("Hi! I'm interested in joining SakiVihar Swimming Club. Could you please provide more information about swimming lessons and membership?");
                      const phoneNumber = "917208000785"; // Indian phone number
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
              window.open(whatsappUrl, '_blank');
            }}
          >
            Join Our Club
          </Button>
          
          <Button 
            variant="outline"
            className="glass-card border-secondary/50 text-primary-foreground hover:bg-secondary/20 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 lg:py-6 group w-full sm:w-auto"
            onClick={() => window.open('https://www.youtube.com/watch?v=Tzm6TEManmQ', '_blank')}
          >
            <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-splash" />
            Watch Full Video
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="glass-card p-4 sm:p-6 text-center team-card"
              style={{ animationDelay: `${index * 200}ms` }}
            >
                      <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-secondary mx-auto mb-2 sm:mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-secondary/50 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-secondary rounded-full mt-2"></div>
                </div>
              </div>
    </section>
  );
};

export default HeroSection;