import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import az from './locales/az.json';
import tr from './locales/tr.json';
import ka from './locales/ka.json';
import ru from './locales/ru.json';
import it from './locales/it.json';
import de from './locales/de.json';
import ar from './locales/ar.json';

const RTL_LANGUAGES = ['ar'];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      az: { translation: az },
      tr: { translation: tr },
      ka: { translation: ka },
      ru: { translation: ru },
      it: { translation: it },
      de: { translation: de },
      ar: { translation: ar },
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

i18n.on('languageChanged', (lng) => {
  const dir = RTL_LANGUAGES.includes(lng) ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', dir);
  document.documentElement.setAttribute('lang', lng);
});

// Set initial direction
const initLng = i18n.language || 'en';
document.documentElement.setAttribute('dir', RTL_LANGUAGES.includes(initLng) ? 'rtl' : 'ltr');
document.documentElement.setAttribute('lang', initLng);

export default i18n;
