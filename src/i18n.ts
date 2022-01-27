import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common from './locales/ru/common.json';
import student from './locales/ru/student.json';
import subtest from './locales/ru/subtest.json';
import range from './locales/ru/range.json';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n.use(initReactI18next).init({
    resources: {
        ru: {
            translation: {
                common,
                student,
                subtest,
                range,
            },
        },
    },
    lng: 'ru',
    keySeparator: '.',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
