import { IMetadataStorageService } from '@ports';
import { TestConclusion } from '@types';

export interface IUpdateConclusionUseCaseDependencies {
    metadataStorage: IMetadataStorageService;
}

export const updateConclusionUseCase = (
    value: TestConclusion,
    deps: IUpdateConclusionUseCaseDependencies,
): void => {
    const { updateConclusion } = deps.metadataStorage;

    updateConclusion(value);
};
