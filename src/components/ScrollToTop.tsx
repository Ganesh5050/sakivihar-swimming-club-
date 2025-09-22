import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.3, type: "spring", damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-secondary/30 rounded-full blur-md animate-pulse"></div>
          
          {/* Icon */}
          <ChevronUp className="h-6 w-6 text-primary-foreground relative z-10 group-hover:animate-bounce" />
          
          {/* Hover effect */}
          <div className="absolute inset-0 bg-primary-foreground/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
