import {
    useDateTransformService,
    useStudentStorage,
    useUpdateStudent,
    useUpdateStudentBirthdate,
} from '@adapters';
import { Student } from '@entities';
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { StudentGender, StudentName } from '@types';
import { DateTime } from 'luxon';
import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Masks } from '../../constants';
import { PrintTemplate } from '../PrintTemplate';

const FIELD_CSS_CLASS = 'student-container__field';

export const StudentSection = (): JSX.Element => {
    const { t, i18n } = useTranslation();
    const { student } = useStudentStorage();
    const dateService = useDateTransformService();

    const updateStudent = useUpdateStudent();
    const updateStudentBirthdate = useUpdateStudentBirthdate();

    const locale = i18n.language;

    const femaleLabel = t('student.gender.female');
    const maleLabel = t('student.gender.male');

    const femaleLabelShort = t('student.gender.female-short');
    const maleLabelShort = t('student.gender.male-short');

    const propertyHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        const property = (event.target.id ||
            event.target.name) as keyof Exclude<Student, 'name' | 'gender'>;
        const value = event.target.value as StudentName | StudentGender;
        updateStudent(property, value);
    };

    const birthdayHandler = (newValue: DateTime | null): void => {
        updateStudentBirthdate(dateService.toDate(newValue));
    };

    const { name, birthDate, gender } = student;

    const birthLabel = t('student.birthdate');

    return (
        <React.Fragment>
            <section className="student-container">
                <div className="student-container__row flex-grow">
                    <FormControl
                        component="fieldset"
                        className={FIELD_CSS_CLASS}
                    >
                        <TextField
                            id="name"
                            type="text"
                            label={t('student.fio')}
                            onChange={propertyHandler}
                            value={name ?? ''}
                            InputLabelProps={{ shrink: !!name }}
                        />
                    </FormControl>
                </div>
                <div className="student-container__row">
                    <FormControl
                        component="fieldset"
                        className={FIELD_CSS_CLASS}
                    >
                        <LocalizationProvider
                            dateAdapter={AdapterLuxon}
                            adapterLocale={locale}
                        >
                            <DatePicker
                                label={birthLabel}
                                value={birthDate}
                                mask={Masks.Date}
                                onChange={birthdayHandler}
                                renderInput={(params: any) => (
                                    <TextField {...params} />
                                )}
                            />
                        </LocalizationProvider>
                    </FormControl>
                    <FormControl
                        component="fieldset"
                        className={FIELD_CSS_CLASS}
                    >
                        <FormLabel component="legend">
                            {t('student.gender.title')}
                        </FormLabel>
                        <RadioGroup
                            id="gender"
                            aria-label="gender"
                            name="gender"
                            value={gender}
                            onChange={propertyHandler}
                        >
                            <FormControlLabel
                                name="gender"
                                value="male"
                                control={<Radio />}
                                label={maleLabel}
                            />
                            <FormControlLabel
                                name="gender"
                                value="female"
                                control={<Radio />}
                                label={femaleLabel}
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
            </section>

            <PrintTemplate>
                <div>
                    {t('student.fio')}: {name} (
                    {student.isMale() ? maleLabelShort : femaleLabelShort})
                </div>
                <React.Fragment>
                    {birthDate && (
                        <div>
                            {t('student.birthdate')}:{' '}
                            {dateService.toLocaleString(birthDate)}
                        </div>
                    )}
                </React.Fragment>
            </PrintTemplate>
        </React.Fragment>
    );
};
