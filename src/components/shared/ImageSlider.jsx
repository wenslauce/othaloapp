import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

export default function ImageSlider({ images, name, interval = 6000, className = "" }) {
  const [index, setIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!images || images.length <= 1 || isLightboxOpen) return;
    
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [images, interval, next, isLightboxOpen]);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className={`relative w-full h-full overflow-hidden group ${className}`}>
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`${name} gallery image ${index + 1}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover cursor-pointer"
            onClick={() => setIsLightboxOpen(true)}
          />
        </AnimatePresence>

        {/* Overlay controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-navy/20 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-navy/40"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-navy/20 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-navy/40"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        <button
          onClick={() => setIsLightboxOpen(true)}
          className="absolute top-2 right-2 z-20 w-8 h-8 flex items-center justify-center rounded-sm bg-navy/40 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-navy/60"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
        
        {/* Slide indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 z-20 flex gap-1">
            {images.map((_, i) => (
              <button 
                key={i} 
                onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === index ? 'bg-teal w-4' : 'bg-white/40'}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 backdrop-blur-sm p-4 lg:p-12"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X className="w-8 h-8" />
            </motion.button>

            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={index}
                src={images[index]}
                alt={name}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="max-w-full max-h-full object-contain"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 py-4 text-white/50 text-sm font-heading">
                {name} — {index + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
