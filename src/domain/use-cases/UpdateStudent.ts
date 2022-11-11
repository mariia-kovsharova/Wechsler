import { Student } from '@entities';
import { IStudentStorageService } from '@ports';
import { deepCopy } from '../../lib';

export interface IUpdateStudentUseCaseDependencies {
    studentStorage: IStudentStorageService;
}

export const updateStudentUseCase = <T extends keyof Student>(
    property: T,
    value: Student[T],
    deps: IUpdateStudentUseCaseDependencies,
): void => {
    const { student, updateStudent } = deps.studentStorage;

    const updatedStudent = deepCopy(student);
    updatedStudent[property] = value;

    updateStudent(updatedStudent);
};
