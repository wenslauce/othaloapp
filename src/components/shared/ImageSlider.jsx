import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ImageSlider({ images, name, interval = 4000, className = "" }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={`${name} gallery image ${index + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      
      {/* Slide indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 right-3 z-20 flex gap-1">
          {images.map((_, i) => (
            <div 
              key={i} 
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === index ? 'bg-teal w-4' : 'bg-white/40'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
