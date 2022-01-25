import { isSameDay } from 'date-fns';
import { periodFactory } from '../../lib/periodFactory';
import { isNil } from '../../lib/utils';
import { StudentDate } from '../entities/student/student';
import { IMetadataStorageService, IPeriodStorageService, IStudentStorageService } from '../ports';

export interface UpdateStudentBirhtdateUseCaseDependencies {
    studentStorage: IStudentStorageService;
    metadataStorage: IMetadataStorageService;
    periodStorage: IPeriodStorageService;
}

/**
 * Это use case - описывает действия, которые необходимо реализовать
 * для того, чтобы обновить данные по студенту
 *
 * Use Case служит определением, какие действия необходимо совершить, чтобы обновить данные по студенту
 * 
 */

export const updateStudentBirthdateUseCase = (birthdate: Date | null, deps: UpdateStudentBirhtdateUseCaseDependencies): void => {
    const { student, updateStudent } = deps.studentStorage;
    const { date } = deps.metadataStorage;

    console.log(date);
    console.log(student);

    // TODO: считать период
    // updateStudent(student);

    if (student.birthDate && birthdate && isSameDay(student.birthDate, birthdate)) {
        return;
    }

    if (birthdate && date) {
        const period = periodFactory(date, birthdate as StudentDate);
    }
}
