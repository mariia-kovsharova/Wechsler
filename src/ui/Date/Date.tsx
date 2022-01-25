import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { FormControl, TextField } from '@mui/material';
import { ru } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
import { useMetadataStorage } from '../../repository/storageAdapter';
import { useUpdateDate } from '../../services/useUpdateDate';
/**
 * Структура такая - UI является управляющим адаптером (взаимодействие с пользователем)
 * UI не должен знать, каким образом изменить домен, он должен только
 * знать, КОГО дернуть (какой юзкейс)
 */
export const DateComponent = (): JSX.Element => {
    const { date } = useMetadataStorage();
    const { t } = useTranslation();
    const update = useUpdateDate();

    return (
        <FormControl component="fieldset">
            <LocalizationProvider dateAdapter={AdapterDateFns}
                locale={ru}>
                <DatePicker
                    label={t('common.date')}
                    value={date}
                    onChange={update}
                    clearable={false}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </FormControl>
    );
};