import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ruTranslation from './locales/ru/common.json';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n.use(initReactI18next).init({
    resources: {
        ru: {
            translation: ruTranslation,
        },
    },
    lng: 'ru',
    keySeparator: '.',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
