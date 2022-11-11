import {
    IDateTransformService,
    IMetadataStorageService,
    IPeriodStorageService,
    IStudentStorageService,
} from '@ports';
import { StudentDate } from '@types';
import { deepCopy } from '../../lib';
import { periodFactory } from '../../lib/periodFactory';

export interface IUpdateStudentBirhtdateUseCaseDependencies {
    studentStorage: IStudentStorageService;
    metadataStorage: IMetadataStorageService;
    periodStorage: IPeriodStorageService;
    dateTransformService: IDateTransformService;
}

export const updateStudentBirthdateUseCase = (
    birthdate: Date | null,
    deps: IUpdateStudentBirhtdateUseCaseDependencies,
): void => {
    const { student, updateStudent } = deps.studentStorage;
    const { date } = deps.metadataStorage;
    const { updatePeriod } = deps.periodStorage;

    const dateTransformService = deps.dateTransformService;

    if (
        student.birthDate &&
        birthdate &&
        dateTransformService.isSameDate(student.birthDate, birthdate)
    ) {
        return;
    }

    const updatedStudent = deepCopy(student);
    updatedStudent.birthDate = birthdate ? (birthdate as StudentDate) : null;

    updateStudent(updatedStudent);

    if (birthdate && date) {
        const period = periodFactory(
            date,
            birthdate as StudentDate,
            dateTransformService,
        );
        updatePeriod(period);
    } else {
        updatePeriod(null);
    }
};
