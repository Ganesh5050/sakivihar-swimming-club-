import { useState, useEffect } from 'react';
import { MessageCircle, Phone, X, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  // Auto-open after 60 seconds (only once per session)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasAutoOpened && !isOpen) {
        setIsOpen(true);
        setHasAutoOpened(true);
      }
    }, 60000); // 60 seconds

    return () => clearTimeout(timer);
  }, [hasAutoOpened, isOpen]);

  // Listen for custom event to open WhatsApp chat
  useEffect(() => {
    const handleOpenWhatsApp = () => {
      setIsOpen(true);
    };

    window.addEventListener('openWhatsAppChat', handleOpenWhatsApp);
    return () => window.removeEventListener('openWhatsAppChat', handleOpenWhatsApp);
  }, []);

  const coaches = [
    {
      id: 1,
      name: 'Prashant Mhatre',
      title: 'Head Swimming Coach',
      phone: '+91 72080 00785', // Indian phone number
      speciality: 'Competitive Swimming',
      avatar: '🏊‍♂️',
      preMessage: 'Hi Prashant Sir! I\'m interested in joining SakiVihar Swimming Club. Could you please provide more information about swimming lessons and membership?'
    }
  ];

  const quickMessages = [
    'I need more information about swimming lessons',
    'What are your fees and packages?',
    'Can I schedule a trial session?',
    'What are the training timings?',
    'I have some enquiries about joining'
  ];

  const trainingHours = 'Mon-Fri: 6AM-10PM | Sat-Sun: 6AM-8PM';

  const handleCoachSelect = (coach: any) => {
    // Direct WhatsApp integration - open WhatsApp immediately with coach's number and pre-filled message
    const encodedMessage = encodeURIComponent(coach.preMessage);
    const phoneNumber = coach.phone.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const handleEnquirySelect = (enquiry: string) => {
    // Direct WhatsApp integration - open WhatsApp immediately with enquiry message
    const encodedMessage = encodeURIComponent(enquiry);
    const phoneNumber = coaches[0].phone.replace(/[^0-9]/g, ''); // Use first coach's number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const handleDirectCall = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={toggleChat}
          className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            boxShadow: [
              "0 0 0 0 rgba(34, 197, 94, 0.7)",
              "0 0 0 20px rgba(34, 197, 94, 0)",
              "0 0 0 0 rgba(34, 197, 94, 0)"
            ]
          }}
          transition={{ 
            boxShadow: { 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-8 w-8 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-8 w-8 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed bottom-24 right-6 z-40"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 20 }}
          >
            <motion.div 
              className="bg-white rounded-2xl w-80 max-h-[70vh] overflow-hidden shadow-2xl relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Chat Bubble Tail */}
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45"></div>
              
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">SakiVihar Swimming Club</h3>
                    <p className="text-xs opacity-90">Chat with coaches</p>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Chat Content */}
              <div className="p-4 space-y-4 max-h-[50vh] overflow-y-auto">
                {/* Welcome Message */}
                <motion.div 
                  className="bg-gradient-to-r from-green-50 to-blue-50 p-3 rounded-xl border border-green-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-800 text-xs leading-relaxed">
                    👋 Welcome to SakiVihar Swimming Club! Contact us for more information about swimming lessons, fees, schedules, and enquiries. We're here to help! 🏊‍♂️
                  </p>
                </motion.div>

                {/* Choose a Coach */}
                <div>
                  <h4 className="font-bold text-gray-800 mb-3 text-sm">Choose a coach:</h4>
                  <div className="space-y-2">
                    {coaches.map((coach, index) => (
                      <motion.div
                        key={coach.id}
                        className="p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 border-gray-200 hover:border-green-300 hover:shadow-md"
                        onClick={() => handleCoachSelect(coach)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl">
                              {coach.avatar}
                            </div>
                            <div>
                              <p className="font-bold text-gray-800">{coach.name}</p>
                              <p className="text-sm text-gray-600">{coach.title}</p>
                              <p className="text-xs text-green-600 font-medium">{coach.speciality}</p>
                            </div>
                          </div>
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDirectCall(coach.phone);
                            }}
                            className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Phone className="h-5 w-5 text-white" />
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Quick Message Templates */}
                <div>
                  <h4 className="font-bold text-gray-800 mb-4 text-lg">Quick enquiries:</h4>
                  <div className="grid gap-2">
                    {quickMessages.map((enquiry, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleEnquirySelect(enquiry)}
                        className="w-full text-left p-3 rounded-xl border border-gray-200 hover:border-green-300 hover:bg-gray-50 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <MessageCircle className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="text-sm text-gray-700 font-medium">{enquiry}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Training Hours */}
                <motion.div 
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Training Hours</p>
                      <p className="text-sm text-gray-600">{trainingHours}</p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppChat;