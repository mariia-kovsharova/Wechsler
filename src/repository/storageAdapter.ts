/* eslint-disable @typescript-eslint/no-unsafe-return */
import { IMetadataStorageService, IPeriodStorageService, IStudentStorageService } from '../domain/ports';
import { useStore } from './store';

export function useStudentStorage(): IStudentStorageService {
    return useStore();
}

export function useMetadataStorage(): IMetadataStorageService {
    return useStore();
}

export function usePeriodStorage(): IPeriodStorageService {
    return useStore();
}
