import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json';
import translationAR from './locales/ar.json';

// الحصول على اللغة الافتراضية من Local Storage أو Redux
const currentLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      ar: { translation: translationAR },
    },
    lng: currentLanguage, // اللغة الافتراضية
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;