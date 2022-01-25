import { IMetadataStorageService } from '../ports';
import { TestDate } from '../types';

export interface IUpdateDateUseCaseDependencies {
    metadataStorage: IMetadataStorageService;
}

/**
 * Это use case - описывает действия, которые необходимо реализовать
 * для того, чтобы обновить данные по дате 
 * 
 */

export const updateDateUseCase = (date: TestDate | null, deps: IUpdateDateUseCaseDependencies): void => {
    console.log('here');
    const { updateDate } = deps.metadataStorage;
    updateDate(date);
};