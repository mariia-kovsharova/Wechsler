import { periodFactory } from '../../lib/periodFactory';
import { IMetadataStorageService, IPeriodStorageService, IStudentStorageService } from '../ports';
import { TestDate } from '../types';

export interface IUpdateDateUseCaseDependencies {
    studentStorage: IStudentStorageService;
    metadataStorage: IMetadataStorageService;
    periodStorage: IPeriodStorageService;
}

export const updateDateUseCase = (date: TestDate | null, deps: IUpdateDateUseCaseDependencies): void => {
    const { student } = deps.studentStorage;
    const { updatePeriod } = deps.periodStorage;
    const { updateDate } = deps.metadataStorage;

    updateDate(date);

    if (student.birthDate && date) {
        const period = periodFactory(date, student.birthDate);
        updatePeriod(period);
    }
};