// Internationalization configuration
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '@/locales/en.json';
import no from '@/locales/no.json';
import fr from '@/locales/fr.json';
import es from '@/locales/es.json';
import pt from '@/locales/pt.json';
import ru from '@/locales/ru.json';
import ar from '@/locales/ar.json';
import hi from '@/locales/hi.json';
import id from '@/locales/id.json';
import fil from '@/locales/fil.json';
import th from '@/locales/th.json';
import vi from '@/locales/vi.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      no: { translation: no },
      fr: { translation: fr },
      es: { translation: es },
      pt: { translation: pt },
      ru: { translation: ru },
      ar: { translation: ar },
      hi: { translation: hi },
      id: { translation: id },
      fil: { translation: fil },
      th: { translation: th },
      vi: { translation: vi },
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;