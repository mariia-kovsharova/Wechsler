import { useExportFile, useImportFile, useNotificationService, usePeriodStorage } from '@adapters';
import { Print, Save, Upload } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

export const HeaderButtons = (): JSX.Element => {
    const { t } = useTranslation();
    const { period } = usePeriodStorage();
    const { exportFile } = useExportFile();
    const { importFile } = useImportFile();
    const notificationService = useNotificationService();

    const handlePrintButton = () => {
        window.print();
    };

    const handleSaveButtonClick = (): void => {
        exportFile();
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        const fileReader = new FileReader();        

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        fileReader.onload = function (_event: ProgressEvent<FileReader>) {
            const content = fileReader.result as string;
            try {
                importFile(content);
            } catch (e) {
                const message = t('common.upload.error');
                notificationService.notify(message);
            }
        };

        fileReader.readAsText(file);
    };

    return (
        <React.Fragment>
            <div className="header-buttons">
                <input id="content-button-file"
                    type="file"
                    hidden={true}
                    aria-hidden={true}
                    accept="application/json"
                    onChange={handleFileChange}/>

                <Button startIcon={<Save />}
                    onClick={handleSaveButtonClick}
                    className="header-buttons__button"
                    variant="contained"
                    color="primary">
                    {t('common.buttons.save')}
                </Button>

                <label htmlFor="content-button-file">
                    <Button startIcon={<Upload />}
                        variant="contained"
                        color="primary" 
                        component="span"
                        className="header-buttons__button" >
                        {t('common.buttons.upload')}
                    </Button>
                </label>

                <div className="header-buttons__actions">
                    <IconButton disabled={!(period?.isTestCountValid())} onClick={handlePrintButton}>
                        <Print />
                    </IconButton>
                </div>
            </div>       
        </React.Fragment>
    );
};