import { Student } from '../domain/entities/student/student';
import { StudentKey, updateStudentUseCase } from '../domain/use-cases';
import { updateStudentBirthdateUseCase } from '../domain/use-cases/UpdateStudentBirthdate';
import { useMetadataStorage, usePeriodStorage, useStudentStorage } from '../repository/storageAdapter';

export function useUpdateStudent() {
    const studentStorage = useStudentStorage();
    return <T extends StudentKey>(property: T, value: Student[T]) => updateStudentUseCase(property, value, { studentStorage })
}

export function useUpdateStudentBirthdate() {
    const studentStorage = useStudentStorage();
    const metadataStorage = useMetadataStorage();
    const periodStorage = usePeriodStorage();

    return (date: Date | null) => updateStudentBirthdateUseCase(date, {
        studentStorage,
        metadataStorage,
        periodStorage
    })
}