import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import chart from './ui/locales/ru/chart.json';
import common from './ui/locales/ru/common.json';
import range from './ui/locales/ru/range.json';
import student from './ui/locales/ru/student.json';
import subtest from './ui/locales/ru/subtest.json';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n.use(initReactI18next).init({
    resources: {
        ru: {
            translation: {
                common,
                student,
                subtest,
                range,
                chart,
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
