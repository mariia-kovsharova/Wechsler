import { Period } from './entities/period';
import {
    FileContent, FileName, FileType,
    IConclusionDto, IDateDto, IPeriodDto,
    IStudent, IStudentDto, StringifiedDateType,
    TestConclusion, TestDate,
} from './types';

export enum PeriodType {
    FIVE_ZERO_THREE = 'five-years-from-zero-to-three-months',
}

export interface IStudentStorageService {
    student: IStudent;
    updateStudent: (student: IStudent) => void;
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

export class SerializeParams implements ISerializeParams {
    constructor(
        public readonly date: IDateDto,
        public readonly student: IStudentDto,
        public readonly period: IPeriodDto | null,
        public readonly conclusion: IConclusionDto,
    ) { }
}

export interface ISerializationService {
    serialize: (params: ISerializeParams) => string;
    deserialize: (json: string) => ISerializeParams;
}

export interface IFileService {
    exportFile: (name: FileName, content: FileContent, type?: FileType) => void;
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

export interface IPeriodDispatchingService {
    dispatch: (from: IPeriodDto | null) => Period | null;
}