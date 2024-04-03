import {
    createContext,
    FC,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { useTranslation, I18nextProvider } from 'react-i18next';

export enum Locales {
    EN = 'en',
    RU = 'ru',
}

type LocalesContextType = {
    locale: Locales;
    changeLocale: (next: Locales) => void;
};

const INITIAL_CONTEXT: LocalesContextType = {
    locale: Locales.RU,
    changeLocale() {
        return;
    },
};

export const LocaleContext = createContext<LocalesContextType>(INITIAL_CONTEXT);

export const LocaleProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [locale, setLocale] = useState<Locales>(INITIAL_CONTEXT.locale);

    const { i18n } = useTranslation();

    useEffect(() => {
        const init = async () => {
            await i18n.changeLanguage(INITIAL_CONTEXT.locale);
        };

        void init();
    }, [i18n]);

    const changeLocale = useCallback(
        async (next: Locales) => {
            await i18n.changeLanguage(next);
            setLocale(next);
        },
        [i18n],
    );

    const value = useMemo(
        () => ({ locale, changeLocale }),
        [locale, changeLocale],
    );

    return (
        <LocaleContext.Provider value={value}>
            <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        </LocaleContext.Provider>
    );
};

export const useLocale = (): Locales => {
    const { locale } = useContext(LocaleContext);
    return locale;
};
