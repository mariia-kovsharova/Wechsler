import { useMetadataStorage, useUpdateDate } from '@adapters';
import { FormControl, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/ru';
import { useTranslation } from 'react-i18next';
import { Masks } from '../../constants';

const RU = 'ru';

export const DateComponent = (): JSX.Element => {
    const { date } = useMetadataStorage();
    const { t } = useTranslation();
    const update = useUpdateDate();
    
    const label = t('common.date');

    return (
        <FormControl component="fieldset">
            <LocalizationProvider dateAdapter={AdapterDayjs}
                adapterLocale={RU}>
                <DatePicker
                    label={label}
                    value={date}
                    onChange={update}
                    mask={Masks.Date}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </FormControl>
    );
};