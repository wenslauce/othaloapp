import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from '@/components/shared/LocalizedLink';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CookiesBanner() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given or rejected
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Delay showing the banner slightly for better UX transition
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 25 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="bg-navy border border-white/10 rounded-lg p-5 shadow-2xl backdrop-blur-md bg-opacity-95 text-white flex flex-col gap-4 relative">
            <button
              onClick={handleReject}
              className="absolute top-3 right-3 text-white/40 hover:text-white transition-colors"
              aria-label="Dismiss cookie notice"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-teal" />
              </div>
              <h3 className="font-heading font-semibold text-sm tracking-wide">
                {t('cookies.title')}
              </h3>
            </div>

            <p className="text-white/70 text-xs leading-relaxed">
              {t('cookies.text')}{' '}
              <Link to="/privacy" className="text-teal hover:underline font-medium">
                {t('cookies.learn_more')}
              </Link>
            </p>

            <div className="flex items-center justify-end gap-2.5 pt-1">
              <Button
                variant="ghost"
                onClick={handleReject}
                className="text-white/60 hover:text-white hover:bg-white/5 h-8 px-4 text-xs font-semibold rounded-md border-0"
              >
                {t('cookies.reject')}
              </Button>
              <Button
                onClick={handleAccept}
                className="bg-teal hover:bg-teal-light text-white h-8 px-5 text-xs font-semibold rounded-md shadow-sm"
              >
                {t('cookies.accept')}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
