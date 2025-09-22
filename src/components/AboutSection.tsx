import { Users, Trophy, Target, Clock, Star, Waves } from 'lucide-react';
import Typewriter from '@/components/Typewriter';

const AboutSection = () => {
  const features = [
    {
      icon: Trophy,
      title: 'Championship Training',
      description: 'Professional coaching methods used by Olympic champions'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Building lifelong friendships and team spirit'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Personalized training plans for every swimmer'
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      description: 'Morning and evening sessions to fit your schedule'
    }
  ];


  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-underwater opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 glass-card rounded-full mb-6">
            <Waves className="h-8 w-8 text-secondary animate-float" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            <Typewriter 
              words={['About Our Club', 'Our Story', 'Who We Are', 'Our Mission']}
              delay={2500}
              typeSpeed={120}
              deleteSpeed={60}
              className="text-primary-foreground"
            />
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 15 years, SakiVihar Swimming Club has been Mumbai's premier destination 
            for swimming excellence, fostering champions and building a passionate community of swimmers.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="glass-card p-8 team-card water-wave">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-primary rounded-full mr-4">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To provide world-class swimming training and facilities that nurture talent, 
              promote fitness, and build character. We believe in creating champions both in 
              and out of the pool through dedication, discipline, and community spirit.
            </p>
          </div>

          <div className="glass-card p-8 team-card water-wave">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-primary rounded-full mr-4">
                <Star className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be Mumbai's leading swimming club, recognized for excellence in training, 
              innovation in coaching methods, and our contribution to developing India's 
              next generation of swimming champions.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="glass-card p-6 text-center team-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center p-4 bg-gradient-primary rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-primary-foreground animate-float" />
              </div>
              <h4 className="text-lg font-semibold text-primary-foreground mb-3">
                {feature.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-8 team-card">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Dive In?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Join our swimming community and experience the difference that professional coaching, 
              world-class facilities, and a supportive environment can make in your aquatic journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="glass-card border-secondary/50 text-primary-foreground hover:bg-secondary/20 px-8 py-3 rounded-lg transition-all duration-300"
                onClick={() => document.querySelector('#coaches')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Meet Our Coach
              </button>
              <button 
                className="glass-card border-secondary/50 text-primary-foreground hover:bg-secondary/20 px-8 py-3 rounded-lg transition-all duration-300"
                onClick={() => window.open('https://www.google.com/maps/place/Prashant+Mhatre+Swimming/@19.1090166,72.8895433,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9737f5b82c3:0xbc7ea3eb81b79593!8m2!3d19.1090166!4d72.8895433!16s%2Fg%2F11h4z17gyv', '_blank')}
              >
                Visit Our Location
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;