import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { resources } from "./resources.tsx";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: resources,
    fallbackLng: 'en',
    lowerCaseLng: true,
    // interpolation: {
    //   escapeValue: false
    // },
  });

export default i18n;