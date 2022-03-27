import { Period } from './entities/period';
import { Student } from './entities/student/student';
import {
    FileContent, FileName, FileType,
    IConclusionDto, IDateDto, IPeriodDto,
    IStudentDto, StringifiedDateType, TestConclusion, TestDate,
} from './types';

export interface IStudentStorageService {
    student: Student;
    updateStudent: (student: Student) => void;
}

export interface IMetadataStorageService {
    date: TestDate;
    conclusion: TestConclusion;
    updateDate: (date: TestDate | null) => void;
    updateConclusion: (conclusion: TestConclusion) => void;
}

export interface IPeriodStorageService {
    period: Period | null;
    updatePeriod: (period: Period | null) => void;
}

export interface ISerializeParams {
    date: IDateDto;
    student: IStudentDto;
    period: IPeriodDto | null;
    conclusion: IConclusionDto;
}

export interface ISerializationService {
    // TODO: params and types?
    serialize: (params: ISerializeParams) => string;
    deserialize: (data: string) => void;
}

export interface IFileService {
    // TODO: types?
    exportFile: (name: FileName, content: FileContent, type?: FileType) => void;
    importFile: () => Promise<void>;
}

export interface INotificationService {
    notify: (message: string) => void;
}

export interface IDateTransformService {
    toLocaleString: (date: Date) => string;
    fromLocaleString: (from: StringifiedDateType) => Date;
}

export interface IDtoService<FromType, ToType> {
    toDto: (from: FromType) => ToType;
    toEntity: (from: ToType) => FromType;
}