import {
    IDateTransformService,
    IMetadataStorageService,
    IPeriodStorageService,
    IStudentStorageService,
} from '@ports';
import { TestDate } from '@types';
import { periodFactory } from '../../lib/periodFactory';

export interface IUpdateDateUseCaseDependencies {
    studentStorage: IStudentStorageService;
    metadataStorage: IMetadataStorageService;
    periodStorage: IPeriodStorageService;
    dateTransformService: IDateTransformService;
}

export const updateDateUseCase = (
    date: TestDate | null,
    deps: IUpdateDateUseCaseDependencies,
): void => {
    const { student } = deps.studentStorage;
    const { updatePeriod } = deps.periodStorage;
    const { updateDate } = deps.metadataStorage;

    const dateTransformService = deps.dateTransformService;

    updateDate(date);

    if (student.birthDate && date) {
        const period = periodFactory(
            date,
            student.birthDate,
            dateTransformService,
        );
        updatePeriod(period);
    }
};
