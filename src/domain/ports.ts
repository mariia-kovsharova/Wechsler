import { Student } from './entities';
import { Period } from './entities/period';
import {
    FileContent,
    FileName,
    FileType,
    IConclusionDto,
    IDateDto,
    IPeriodDto,
    IStudentDto,
    StringifiedDateType,
    TestConclusion,
    TestDate,
} from './types';

export enum PeriodType {
    FIVE_ZERO_THREE = 'five-years-from-zero-to-three-months',
    FIVE_FOUR_SEVEN = 'five-years-from-four-to-seven-months',
    FIVE_EIGHT_ELEVEN = 'five-years-from-eight-to-eleven-months',

    SIX_ZERO_THREE = 'six-years-from-zero-to-three-months',
    SIX_FOUR_SEVEN = 'six-years-from-four-to-seven-months',
    SIX_EIGHT_ELEVEN = 'six-years-from-eight-to-eleven-months',

    SEVEN_ZERO_THREE = 'seven-years-from-zero-to-three-months',
    SEVEN_FOUR_SEVEN = 'seven-years-from-four-to-seven-months',
    SEVEN_EIGHT_ELEVEN = 'seven-years-from-eight-to-eleven-months',

    EIGHT_ZERO_THREE = 'eight-years-from-zero-to-three-months',
    EIGHT_FOUR_SEVEN = 'eight-years-from-four-to-seven-months',
    EIGHT_EIGHT_ELEVEN = 'eight-years-from-eight-to-eleven-months',

    NINE_ZERO_THREE = 'nine-years-from-zero-to-three-months',
    NINE_FOUR_SEVEN = 'nine-years-from-four-to-seven-months',
    NINE_EIGHT_ELEVEN = 'nine-years-from-eight-to-eleven-months',

    TEN_ZERO_THREE = 'ten-years-from-zero-to-three-months',
    TEN_FOUR_SEVEN = 'ten-years-from-four-to-seven-months',
    TEN_EIGHT_ELEVEN = 'ten-years-from-eight-to-eleven-months',

    ELEVEN_ZERO_THREE = 'eleven-years-from-zero-to-three-months',
    ELEVEN_FOUR_SEVEN = 'eleven-years-from-four-to-seven-months',
    ELEVEN_EIGHT_ELEVEN = 'eleven-years-from-eight-to-eleven-months',

    TWELVE_ZERO_THREE = 'twelve-years-from-zero-to-three-months',
    TWELVE_FOUR_SEVEN = 'twelve-years-from-four-to-seven-months',
    TWELVE_EIGHT_ELEVEN = 'twelve-years-from-eight-to-eleven-months',

    THIRTEEN_ZERO_THREE = 'thirteen-years-from-zero-to-three-months',
    THIRTEEN_FOUR_SEVEN = 'thirteen-years-from-four-to-seven-months',
    THIRTEEN_EIGHT_ELEVEN = 'thirteen-years-from-eight-to-eleven-months',

    FOURTEEN_ZERO_THREE = 'fourteen-years-from-zero-to-three-months',
    FOURTEEN_FOUR_SEVEN = 'fourteen-years-from-four-to-seven-months',
    FOURTEEN_EIGHT_ELEVEN = 'fourteen-years-from-eight-to-eleven-months',

    FIFTEEN_ZERO_THREE = 'fifteen-years-from-zero-to-three-months',
    FIFTEEN_FOUR_SEVEN = 'fifteen-years-from-four-to-seven-months',
    FIFTEEN_EIGHT_ELEVEN = 'fifteen-years-from-eight-to-eleven-months',
}

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

export class SerializeParams implements ISerializeParams {
    constructor(
        public readonly date: IDateDto,
        public readonly student: IStudentDto,
        public readonly period: IPeriodDto | null,
        public readonly conclusion: IConclusionDto,
    ) {}
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
    toLocaleString: (date: Date, format?: string) => string;
    fromLocaleString: (from: StringifiedDateType, format?: string) => Date;
    toDate: (from: any) => Date;
    isSameDate: (first: Date, second: Date) => boolean;
    getDiffInMonths: (first: Date, second: Date) => number;
}

export interface IDtoService<FromType, ToType> {
    toDto: (from: FromType) => ToType;
    toEntity: (from: ToType) => FromType;
}

export interface IPeriodDispatchingService {
    dispatch: (from: IPeriodDto | null) => Period | null;
}
