import { TestDate } from '../domain/types';
import { updateDateUseCase } from '../domain/use-cases/UpdateDate';
import { useMetadataStorage, usePeriodStorage, useStudentStorage } from '../repository/storageAdapter';

export function useUpdateDate() {
    const studentStorage = useStudentStorage();
    const metadataStorage = useMetadataStorage();
    const periodStorage = usePeriodStorage();

    return (date: Date | null) =>
        updateDateUseCase(date as TestDate | null, { studentStorage, metadataStorage, periodStorage });
}