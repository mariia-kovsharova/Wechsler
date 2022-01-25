import { IMetadataStorageService } from '../ports';
import { TestDate } from '../types';

export interface UpdateDateUseCaseDependencies {
    metadataStorage: IMetadataStorageService;
}

/**
 * Это use case - описывает действия, которые необходимо реализовать
 * для того, чтобы обновить данные по дате 
 * 
 */

export const updateDateUseCase = (date: TestDate | null, deps: UpdateDateUseCaseDependencies): void => {
    console.log('here');
    const { updateDate } = deps.metadataStorage;
    updateDate(date);
}