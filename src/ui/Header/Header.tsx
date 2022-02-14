import { Button, ButtonGroup, Container } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DateComponent } from '../Date';

export const Header = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Container>
                <ButtonGroup>
                    <Button>{t('common.buttons.export')}</Button>
                    <Button>{t('common.buttons.import')}</Button>
                </ButtonGroup>
            </Container>
            <header>
                <Container>
                    <section className="header-container">
                        <h1 className="header-container__title">{t('common.title')}</h1>
                        <div className="header-container__actions">
                            <DateComponent></DateComponent>
                        </div>
                    </section>
                </Container>
            </header>
        </React.Fragment>
    );
};
