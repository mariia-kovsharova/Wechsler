import { IconButton, ButtonGroup, Button } from '@mui/material';
import { Print, Save, Upload } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { usePeriodStorage } from '../../repository/storageAdapter';

export const HeaderButtons = (): JSX.Element => {
    const { t } = useTranslation();
    const { period } = usePeriodStorage();

    const handlePrintButton = () => {
        window.print();
    };

    return (
        <div className="header-buttons">
            <ButtonGroup>
                <Button startIcon={<Save />}>{t('common.buttons.save')}</Button>
                <Button startIcon={<Upload />}>{t('common.buttons.upload')}</Button>
            </ButtonGroup>

            <div className="header-buttons__actions">
                <IconButton disabled={!(period?.isTestCountValid())} onClick={handlePrintButton}>
                    <Print />
                </IconButton>
            </div>
        </div>
    );
};