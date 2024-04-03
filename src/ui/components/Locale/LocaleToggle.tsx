import { useContext } from 'react';
import { LocaleContext, Locales } from './LocaleProvider';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const LocaleToggle = () => {
    const { t } = useTranslation();
    const { locale, changeLocale } = useContext(LocaleContext);

    const isRuLocale = locale === Locales.RU;

    return (
        <>
            <Button
                onClick={() => changeLocale(Locales.RU)}
                variant="contained"
                disabled={isRuLocale}
            >
                {t('common.locales.RU')}
            </Button>

            <Button
                onClick={() => changeLocale(Locales.EN)}
                variant="contained"
                disabled={!isRuLocale}
            >
                {t('common.locales.EN')}
            </Button>
        </>
    );
};
