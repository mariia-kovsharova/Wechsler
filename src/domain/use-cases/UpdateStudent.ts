import { cloneDeep } from 'lodash-es';
import { Student } from '../entities/student/student';
import { IStudentStorageService } from '../ports';

export type StudentKey = Exclude<keyof Student, 'birthDate'>;

export interface UpdateStudentUseCaseDependencies {
    studentStorage: IStudentStorageService
}

/**
 * Это use case - описывает действия, которые необходимо реализовать
 * для того, чтобы обновить данные по студенту
 *
 * Use Case служит определением, какие действия необходимо совершить, чтобы обновить данные по студенту
 * 
 */

export const updateStudentUseCase = <T extends StudentKey>(property: T, value: Student[T], deps: UpdateStudentUseCaseDependencies): void => {
    const { student, updateStudent } = deps.studentStorage;
    const studentCopy = cloneDeep(student);
    studentCopy[property] = value;

    updateStudent(studentCopy);
}