import {
    IStudentStorageService, IMetadataStorageService,
    IPeriodStorageService, IFileService,
    ISerializationService, INotificationService, IDateTransformService,
} from '../ports';
import { FileContent, FileName } from '../types';

export interface IExportUseCaseDependencies {
    studentStorage: IStudentStorageService;
    metadataStorage: IMetadataStorageService;
    periodStorage: IPeriodStorageService;
    serializationService: ISerializationService;
    fileService: IFileService;
    notificationService: INotificationService;
    dateTransformService: IDateTransformService;
}

export const exportUseCase = ({
    studentStorage, metadataStorage,
    periodStorage, serializationService,
    fileService, notificationService,
    dateTransformService,
}: IExportUseCaseDependencies): void => {
    const { student } = studentStorage;
    const { date, conclusion } = metadataStorage;
    const { period } = periodStorage;
    const serializedData = serializationService.serialize({ date, student, period, conclusion });
    try {
        const stringifiedDate = dateTransformService.toLocaleString(date);
        const fileName = `${stringifiedDate}_${student.name ?? ''}`;
        fileService.exportFile(fileName as FileName, serializedData as FileContent);
    } catch (e) {
        // TODO: translate 
        notificationService.notify('Something went wrong...');
        throw e;
    }
};