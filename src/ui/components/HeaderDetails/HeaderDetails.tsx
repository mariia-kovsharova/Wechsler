import { useDateTransformService, useMetadataStorage } from '@adapters';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DateComponent } from '../Date';
import { PrintTemplate } from '../PrintTemplate';

export const HeaderDetails = (): JSX.Element => {
    const { t } = useTranslation();
    const { date } = useMetadataStorage();
    const dateService = useDateTransformService();

    return (
        <React.Fragment>
            <section className="header-container">
                <h1 className="header-container__title">{t('common.title')}</h1>
                <div className="header-container__date">
                    <DateComponent></DateComponent>
                </div>
            </section>

            <PrintTemplate>
                <div className="header-container">
                    <h1 className="header-container__title">{t('common.title')}</h1>
                    <div className="header-container__date">
                        { dateService.toLocaleString(date) }
                    </div>
                </div>
            </PrintTemplate>   
        </React.Fragment>
    );
};
