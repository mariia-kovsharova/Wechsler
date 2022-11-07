import { TestConclusion } from '@types';
import { updateConclusionUseCase } from '../domain/use-cases/UpdateConclusion';
import { useMetadataStorage } from './storageAdapter';

export function useUpdateConclusion() {
    const metadataStorage = useMetadataStorage();

    return (value: string): void =>
        updateConclusionUseCase(value as TestConclusion, { metadataStorage });
}