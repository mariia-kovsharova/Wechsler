import {
    useDateTransformService,
    useMetadataStorage,
    useUpdateDate,
} from '@adapters';
import { FormControl, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { DateTime } from 'luxon';
import { useTranslation } from 'react-i18next';
import { Masks } from '../../constants';

export const DateComponent = (): JSX.Element => {
    const { date } = useMetadataStorage();
    const { t, i18n } = useTranslation();
    const update = useUpdateDate();
    const dateService = useDateTransformService();

    const label = t('common.date');

    const locale = i18n.language;

    const dateHandler = (newValue: DateTime | null): void => {
        update(newValue ? dateService.toDate(newValue) : null);
    };

    return (
        <FormControl component="fieldset">
            <LocalizationProvider
                dateAdapter={AdapterLuxon}
                adapterLocale={locale}
            >
                <DatePicker
                    label={label}
                    value={date}
                    onChange={dateHandler}
                    mask={Masks.Date}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </FormControl>
    );
};
