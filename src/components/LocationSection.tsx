import { MapPin, Clock, Phone, Navigation, Car, Train } from 'lucide-react';
import Typewriter from '@/components/Typewriter';

const LocationSection = () => {
  // Coordinates extracted from the Google Maps URL
  const latitude = 19.1090166;
  const longitude = 72.8895433;
  
  const locationInfo = {
    name: "SakiVihar Swimming Club",
    address: "Andheri East, Sakinaka, Mumbai, Maharashtra",
    coordinates: `${latitude}, ${longitude}`,
    phone: "+91 98765 43210", // You can update this with actual phone number
    timings: [
      { day: "Monday - Friday", time: "6:00 AM - 10:00 PM" },
      { day: "Saturday - Sunday", time: "6:00 AM - 8:00 PM" }
    ]
  };

  const directions = [
    {
      icon: Train,
      mode: "Metro",
      description: "Nearest Metro: Sakinaka Metro Station (5 min walk)"
    },
    {
      icon: Car,
      mode: "By Car",
      description: "Free parking available on premises"
    },
    {
      icon: Navigation,
      mode: "Bus",
      description: "Multiple bus routes available to Sakinaka Junction"
    }
  ];

  const handleGetDirections = () => {
    const googleMapsUrl = `https://www.google.com/maps/place/Prashant+Mhatre+Swimming/@${latitude},${longitude},17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9737f5b82c3:0xbc7ea3eb81b79593!8m2!3d${latitude}!4d${longitude}!16s%2Fg%2F11h4z17gyv`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <section id="location" className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-underwater opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 glass-card rounded-full mb-6">
            <MapPin className="h-8 w-8 text-secondary animate-float" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            <Typewriter 
              words={['Find Us', 'Visit Our Location', 'Come & Swim', 'Our Address']}
              delay={4000}
              typeSpeed={150}
              deleteSpeed={75}
              className="text-primary-foreground"
            />
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Located in the heart of Andheri East, our swimming facility is easily accessible 
            by all modes of transport. Come visit us and experience world-class swimming facilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Location Information */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="glass-card p-8 team-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-full">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                    {locationInfo.name}
                  </h3>
                  <p className="text-muted-foreground mb-2">{locationInfo.address}</p>
                  <p className="text-sm text-secondary font-mono">{locationInfo.coordinates}</p>
                </div>
              </div>
              
              <button 
                onClick={handleGetDirections}
                className="glow-button w-full py-3 flex items-center justify-center space-x-2"
              >
                <Navigation className="h-5 w-5" />
                <span>Get Directions</span>
              </button>
            </div>

            {/* Timings */}
            <div className="glass-card p-8 team-card">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-primary rounded-full">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground">Opening Hours</h3>
              </div>
              
              <div className="space-y-3">
                {locationInfo.timings.map((timing, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-glass/30 rounded-lg">
                    <span className="font-semibold text-primary-foreground">{timing.day}</span>
                    <span className="text-secondary font-medium">{timing.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="glass-card p-8 team-card">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-primary rounded-full">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground">Contact</h3>
              </div>
              
              <div className="space-y-3">
                <a 
                  href={`tel:${locationInfo.phone}`}
                  className="flex items-center space-x-3 p-3 bg-glass/30 rounded-lg hover:bg-secondary/20 transition-colors group"
                >
                  <Phone className="h-5 w-5 text-secondary group-hover:animate-pulse" />
                  <span className="text-primary-foreground font-medium">{locationInfo.phone}</span>
                </a>
              </div>
            </div>

            {/* Transportation */}
            <div className="glass-card p-8 team-card">
              <h3 className="text-2xl font-bold text-primary-foreground mb-6">How to Reach</h3>
              
              <div className="space-y-4">
                {directions.map((direction, index) => (
                  <div key={index} className="flex items-start space-x-4 p-3 bg-glass/30 rounded-lg">
                    <div className="p-2 bg-secondary/20 rounded-lg">
                      <direction.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-foreground mb-1">{direction.mode}</h4>
                      <p className="text-sm text-muted-foreground">{direction.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="lg:sticky lg:top-8">
            <div className="glass-card p-2 team-card">
              <div className="relative overflow-hidden rounded-xl">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.8!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9737f5b82c3%3A0xbc7ea3eb81b79593!2sPrashant%20Mhatre%20Swimming!5e0!3m2!1sen!2sin!4v1695123456789!5m2!1sen!2sin`}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="SakiVihar Swimming Club Location"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none rounded-xl"></div>
              </div>
              
              {/* Map Controls */}
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handleGetDirections}
                  className="flex-1 glass-card border-secondary/50 text-primary-foreground hover:bg-secondary/20 py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MapPin className="h-4 w-4" />
                  <span>View on Google Maps</span>
                </button>
                <button 
                  onClick={() => navigator.share && navigator.share({
                    title: 'SakiVihar Swimming Club Location',
                    url: `https://www.google.com/maps/place/Prashant+Mhatre+Swimming/@${latitude},${longitude}`
                  })}
                  className="flex-1 glass-card border-secondary/50 text-primary-foreground hover:bg-secondary/20 py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Navigation className="h-4 w-4" />
                  <span>Share Location</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
