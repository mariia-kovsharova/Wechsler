import { periodFactory } from '../../lib/periodFactory';
import {
    IDateTransformService,
    IMetadataStorageService,
    IPeriodStorageService,
    IStudentStorageService,
} from '../ports';
import { StudentDate } from '../types';

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

    student.birthDate = birthdate ? (birthdate as StudentDate) : null;

    updateStudent(student);

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
