import { TestDate } from '../domain/types';
import { updateDateUseCase } from '../domain/use-cases/UpdateDate';
import { useMetadataStorage } from '../repository/storageAdapter';

export function useUpdateDate() {
    const metadataStorage = useMetadataStorage();
    return (date: Date | null) => updateDateUseCase(date as TestDate | null, { metadataStorage })
}