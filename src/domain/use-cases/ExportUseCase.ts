import { Student } from '@entities';
import {
    IDateTransformService,
    IDtoService, IFileService,
    IMetadataStorageService, INotificationService,
    IPeriodStorageService, ISerializationService, IStudentStorageService
} from '../ports';
import {
    FileContent, FileName, IConclusionDto,
    IDateDto, IPeriod, IPeriodDto,
    IStudentDto, TestConclusion, TestDate
} from '../types';

export interface IExportUseCaseDependencies {
    studentStorage: IStudentStorageService;
    metadataStorage: IMetadataStorageService;
    periodStorage: IPeriodStorageService;
    serializationService: ISerializationService;
    fileService: IFileService;
    notificationService: INotificationService;
    dateTransformService: IDateTransformService;
    studentDtoService: IDtoService<Student, IStudentDto>,
    periodDtoService: IDtoService<IPeriod, IPeriodDto>,
    dateDtoService: IDtoService<TestDate, IDateDto>,
    conclusionDtoService: IDtoService<TestConclusion, IConclusionDto>,
}

export const exportUseCase = ({
    studentStorage, metadataStorage,
    periodStorage, serializationService,
    fileService, notificationService,
    dateTransformService, studentDtoService,
    periodDtoService, dateDtoService,
    conclusionDtoService,
}: IExportUseCaseDependencies): void => {
    const { student } = studentStorage;
    const { date, conclusion } = metadataStorage;
    const { period } = periodStorage;

    const studentDto = studentDtoService.toDto(student);
    const periodDto = period ? periodDtoService.toDto(period) : null;
    const dateDto = dateDtoService.toDto(date);
    const conclusionDto = conclusionDtoService.toDto(conclusion);

    const serializedData = serializationService.serialize({
        student: studentDto,
        period: periodDto,
        date: dateDto,
        conclusion: conclusionDto,
    });

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