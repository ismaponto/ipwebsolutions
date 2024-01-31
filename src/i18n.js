import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esTranslation from './Components/locales/es.json';
import enTranslation from './Components/locales/en.json';
import frTranslation from './Components/locales/fr.json'; // Agrega la importación para francés
import itTranslation from './Components/locales/it.json'; // Agrega la importación para italiano

i18n
    .use(initReactI18next)
    .init({
        resources: {
            es: {
                translation: esTranslation,
            },
            en: {
                translation: enTranslation,
            },
            fr: {
                translation: frTranslation,
            },
            it: {
                translation: itTranslation,
            },
        },
        lng: 'es',
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;