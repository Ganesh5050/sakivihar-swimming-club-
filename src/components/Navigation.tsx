import { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Coaches', href: '#coaches' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
  ];

  const handleNavClick = (href: string, name: string) => {
    if (name === 'Location') {
      // Open Google Maps directly for Location
      const googleMapsUrl = 'https://www.google.com/maps/place/Prashant+Mhatre+Swimming/@19.1090166,72.8895433,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9737f5b82c3:0xbc7ea3eb81b79593!8m2!3d19.1090166!4d72.8895433!16s%2Fg%2F11h4z17gyv';
      window.open(googleMapsUrl, '_blank');
      setIsOpen(false);
    } else {
      // Normal smooth scroll for other sections
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className={`bg-background/95 backdrop-blur-sm border-b border-glass-border/30 fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-16 flex items-center ${scrolled ? 'py-0' : 'py-0'}`}>
      <div className="container mx-auto px-2 sm:px-4 w-full">
        <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 cursor-pointer hover:opacity-80 transition-opacity duration-300" onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="SakiVihar Swimming Club Logo" 
                  className="h-24 w-24 object-contain"
                  onError={(e) => {
                    // Fallback to text if logo.png doesn't exist
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'block';
                  }}
                />
                <div className="hidden text-secondary animate-underwater font-bold text-xl">
                  🏊‍♂️
                </div>
                <div className="absolute inset-0 blur-md bg-secondary/30 rounded-full animate-pulse"></div>
              </div>
              <div className="block">
                <h1 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-primary-foreground leading-tight">SakiVihar Complex</h1>
                <p className="text-xs sm:text-xs md:text-sm text-secondary font-medium leading-tight">Swimming Club</p>
              </div>
            </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.name)}
                className="relative text-primary-foreground hover:text-secondary transition-all duration-300 font-medium group text-sm xl:text-base"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button 
              className="glow-button text-sm px-4 py-2"
              onClick={() => {
                const message = encodeURIComponent("Hi! I'm interested in joining SakiVihar Swimming Club. Could you please provide more information about swimming lessons and membership?");
                const phoneNumber = "917208000785"; // Indian phone number
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              Join Us
            </Button>
          </div>

          {/* Mobile Navigation - Location + Menu */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => handleNavClick('#location', 'Location')}
              className="text-primary-foreground hover:text-secondary transition-colors p-2"
              title="Location"
            >
              <MapPin className="h-5 w-5" />
            </button>
            <button
              className="text-primary-foreground p-1 sm:p-2 hover:bg-glass/50 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-glass-border/30 shadow-lg">
            <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
              <div className="flex flex-col space-y-2 sm:space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href, item.name)}
                    className="text-left text-primary-foreground hover:text-secondary transition-colors py-1.5 sm:py-2 px-2 sm:px-4 rounded-lg hover:bg-glass/30 text-xs sm:text-sm"
                  >
                    {item.name}
                  </button>
                ))}
                <Button 
                  className="glow-button mt-2 sm:mt-3 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 w-full sm:w-auto"
                  onClick={() => {
                    const message = encodeURIComponent("Hi! I'm interested in joining SakiVihar Swimming Club. Could you please provide more information about swimming lessons and membership?");
                    const phoneNumber = "917208000785"; // Indian phone number
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  Join Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;