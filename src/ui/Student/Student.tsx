import {
    FormControl, FormControlLabel, FormLabel,
    Radio, RadioGroup, TextField,
} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useTranslation } from 'react-i18next';
import { ru } from 'date-fns/locale';
import React, { ChangeEvent } from 'react';
import { useUpdateStudent, useUpdateStudentBirthdate } from '../../services/useUpdateStudent';
import { useStudentStorage } from '../../repository/storageAdapter';
import { StudentKey } from '../../domain/use-cases';
import { Student } from '../../domain/entities/student/student';
import { Masks } from '../constants';
import { PrintTemplate } from '../PrintTemplate';
import { format } from 'date-fns';

const FIELD_CSS_CLASS = 'student-container__field';

export const StudentSection = (): JSX.Element => {
    const { t } = useTranslation();
    const { student } = useStudentStorage();

    const updateStudent = useUpdateStudent();
    const updateStudentBirthdate = useUpdateStudentBirthdate();

    const femaleLabel = t('student.gender.female');
    const maleLabel = t('student.gender.male');

    const femaleLabelShort = t('student.gender.female-short');
    const maleLabelShort = t('student.gender.male-short');

    const propertyHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const property = (event.target.id || event.target.name) as StudentKey;
        const value = event.target.value as Student[StudentKey];
        updateStudent(property, value);
    };

    const { name, birthDate, gender } = student;

    return (
        <React.Fragment>
            <section className="student-container">
                <div className="student-container__row flex-grow">
                    <FormControl component="fieldset" className={FIELD_CSS_CLASS}>
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
                    <FormControl component="fieldset" className={FIELD_CSS_CLASS}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}
                            locale={ru}>
                            <DatePicker
                                label={t('student.birthdate')}
                                value={birthDate}
                                mask={Masks.Date}
                                onChange={updateStudentBirthdate}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>
                    <FormControl component="fieldset" className={FIELD_CSS_CLASS}>
                        <FormLabel component="legend">{t('student.gender.title')}</FormLabel>
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
                <div>{ t('student.fio')}: { name } ({ student.isMale ? maleLabelShort : femaleLabelShort })</div>
                <React.Fragment>
                    {
                        birthDate 
                        && <div>{ t('student.birthdate') }: { format(birthDate, Masks.FormatDate) }</div>
                    }
                </React.Fragment> 
            </PrintTemplate>
        </React.Fragment>
    );
};
