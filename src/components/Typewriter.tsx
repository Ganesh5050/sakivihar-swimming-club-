import { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  delay?: number;
  deleteSpeed?: number;
  typeSpeed?: number;
  className?: string;
}

const Typewriter = ({ 
  words, 
  delay = 1000, 
  deleteSpeed = 50, 
  typeSpeed = 100,
  className = ""
}: TypewriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[currentWordIndex];
      
      if (isWaiting) {
        setIsWaiting(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        
        if (currentText === currentWord) {
          setIsWaiting(true);
        }
      }
    }, isWaiting ? delay : isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isWaiting, currentWordIndex, words, delay, deleteSpeed, typeSpeed]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse text-secondary">|</span>
    </span>
  );
};

export default Typewriter;
