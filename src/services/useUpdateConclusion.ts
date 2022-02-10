import { TestConclusion } from '../domain/types';
import { updateConclusionUseCase } from '../domain/use-cases/UpdateConclusion';
import { useMetadataStorage } from '../repository/storageAdapter';

export function useUpdateConclusion() {
    const metadataStorage = useMetadataStorage();

    return (value: string): void =>
        updateConclusionUseCase(value as TestConclusion, { metadataStorage });
}