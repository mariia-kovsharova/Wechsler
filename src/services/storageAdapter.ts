/* eslint-disable @typescript-eslint/no-unsafe-return */
import { IMetadataStorageService, IPeriodStorageService, IStudentStorageService } from '@ports';
import { useStore } from './store';

export function useStudentStorage(): IStudentStorageService {
    return useStore() as IStudentStorageService;
}

export function useMetadataStorage(): IMetadataStorageService {
    return useStore() as IMetadataStorageService;
}

export function usePeriodStorage(): IPeriodStorageService {
    return useStore() as IPeriodStorageService;
}
