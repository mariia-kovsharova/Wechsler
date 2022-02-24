import { IconButton, ButtonGroup, Button } from '@mui/material';
import { Print, Save, Upload } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { usePeriodStorage } from '../../repository/storageAdapter';
import { useExportFile } from '../../services/useExport';

export const HeaderButtons = (): JSX.Element => {
    const { t } = useTranslation();
    const { period } = usePeriodStorage();
    const { exportFile } = useExportFile();

    const handlePrintButton = () => {
        window.print();
    };

    const handleSaveButtonClick = () => {
        exportFile();
    };

    return (
        <div className="header-buttons">
            <ButtonGroup>
                <Button startIcon={<Save />} onClick={handleSaveButtonClick}>
                    {t('common.buttons.save')}
                </Button>
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