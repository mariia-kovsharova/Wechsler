import { Button, ButtonGroup, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DateComponent } from '../Date';

export const Header = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <header>
            <Container className="header_container">
                <h1 className="header_container__title">Wexler Calculate</h1>
                <div className="header_container__actions">
                    <DateComponent></DateComponent>
                    <ButtonGroup>
                        <Button>{t('buttons.export')}</Button>
                        <Button>{t('buttons.import')}</Button>
                    </ButtonGroup>
                </div>
            </Container>
        </header>
    );
};
