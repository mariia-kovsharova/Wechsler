import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './ui/locales/en';
import translationRU from './ui/locales/ru';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: translationEN,
        },
        ru: {
            translation: translationRU,
        },
    },
    fallbackLng: 'ru',
    keySeparator: '.',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
