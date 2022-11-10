import { Student } from '../entities/student/student';
import { IStudentStorageService } from '../ports';

export interface IUpdateStudentUseCaseDependencies {
    studentStorage: IStudentStorageService;
}

export const updateStudentUseCase = <T extends keyof Student>(
    property: T,
    value: Student[T],
    deps: IUpdateStudentUseCaseDependencies,
): void => {
    const { student, updateStudent } = deps.studentStorage;
    student[property] = value;

    updateStudent(student);
};
