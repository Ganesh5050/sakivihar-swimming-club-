import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SwimLoadingScreenProps {
  onComplete?: () => void;
}

const SwimLoadingScreen = ({ onComplete }: SwimLoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress - smooth and complete
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Wait a moment at 100%, then smoothly fade out
          setTimeout(() => {
            setIsVisible(false);
            // Call onComplete after fade out animation
            setTimeout(() => {
              onComplete?.();
            }, 800); // Match the fade out duration
          }, 500); // Brief pause at 100%
          return 100;
        }
        return prev + Math.random() * 6 + 2; // Smooth progress
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Background Water Ripples */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-2 border-cyan-400/20 animate-ping"></div>
            <div className="absolute top-3/4 right-1/3 w-24 h-24 rounded-full border-2 border-blue-400/15 animate-ping animation-delay-1000"></div>
            <div className="absolute bottom-1/4 left-2/3 w-40 h-40 rounded-full border-2 border-teal-400/10 animate-ping animation-delay-2000"></div>
          </div>

          {/* Main Loading Content */}
          <div className="relative z-10 text-center">
            {/* Animated Logo */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, delay: 0.5, type: "spring", stiffness: 150 }}
            >
              {/* PNG Logo with Fallback */}
              <div className="relative w-96 h-96 mx-auto">
                <img 
                  src="/logo.png" 
                  alt="SakiVihar Swimming Club Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to shield design if logo.png doesn't exist
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'block';
                  }}
                />
                {/* Fallback Shield Design */}
                <div className="hidden w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 rounded-t-full rounded-b-lg shadow-2xl">
                  <div className="absolute inset-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-t-full rounded-b-lg flex items-center justify-center">
                    <div className="text-white text-4xl animate-pulse">🏊‍♂️</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-t-full rounded-b-lg blur-lg opacity-50 animate-pulse"></div>
                </div>
              </div>
            </motion.div>

            {/* Club Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  SakiVihar Complex
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4">
                Swimming Club
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-lg text-blue-200 mb-8 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.2 }}
            >
              Building Champions On and Off the Pool
            </motion.p>

            {/* Progress Bar */}
            <motion.div
              className="w-80 max-w-full mx-auto mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 1.6 }}
            >
              <div className="bg-slate-700/50 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="text-cyan-300 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 2.0 }}
            >
              {progress < 30 && "Initializing..."}
              {progress >= 30 && progress < 60 && "Loading facilities..."}
              {progress >= 60 && progress < 90 && "Preparing training programs..."}
              {progress >= 90 && "Almost ready to dive in!"}
            </motion.div>

            {/* Progress Percentage */}
            <motion.div
              className="text-cyan-400 text-xs mt-2 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 2.4 }}
            >
              {Math.round(progress)}%
            </motion.div>
          </div>

          {/* Floating Water Drops */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full"
              animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="absolute top-32 right-24 w-1.5 h-1.5 bg-blue-400 rounded-full"
              animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute bottom-32 left-32 w-2.5 h-2.5 bg-teal-400 rounded-full"
              animate={{ y: [0, -25, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SwimLoadingScreen;
