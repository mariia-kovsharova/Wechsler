import {
    ArithmeticSubtest, AwarenessSubtest,
    ComprehensibilitySubtest, CubesSubtest,
    DetailsSubtest, DigitsRepeatSubtest,
    EncryptionSubtest, FiguresSubtest,
    ImagesSubtest, LabyrinthsSubtest,
    LexicalSubtest, SimilaritySubtest,
} from './entities/subtests/index';

export type Brand<T, B extends string> = T & { readonly _brand: B };

export type TestConclusion = Brand<string, 'wexler_test_conclusion'>;

export type TestDate = Brand<Date, 'wexler_test_date'>;

export type StudentName = Brand<string, 'student_name'>;

export type StudentDate = Brand<Date, 'student_date'>;

export type StudentGender = 'male' | 'female';

export type SubtestName = Brand<TestName, 'subtest'>;

// TODO: how to map tuples?
export type VerbalSubtestGroup = [
    AwarenessSubtest,
    ComprehensibilitySubtest,
    ArithmeticSubtest,
    SimilaritySubtest,
    LexicalSubtest,
    DigitsRepeatSubtest,
];

export type NonverbalSubtestGroup = [
    DetailsSubtest,
    ImagesSubtest,
    CubesSubtest,
    FiguresSubtest,
    EncryptionSubtest,
    LabyrinthsSubtest,
];

export interface IPeriod {
    type: PeriodType;
    verbalSubtests: ReadonlyArray<ISubtest>;
    nonverbalSubtests: ReadonlyArray<ISubtest>;
}

export interface IPeriodSubtests {
    awareness: AwarenessSubtest;
    comprehensibility: ComprehensibilitySubtest;
    arithmetic: ArithmeticSubtest;
    similarity: SimilaritySubtest;
    lexical: LexicalSubtest;
    digits: DigitsRepeatSubtest;

    details: DetailsSubtest;
    images: ImagesSubtest;
    cubes: CubesSubtest;
    figures: FiguresSubtest;
    encryption: EncryptionSubtest;
    labyrinths: LabyrinthsSubtest;
}

export interface ISubtest {
    readonly name: SubtestName;
    rawPoints: number | null;
    scalePoints: number | null;
    normalPoints: number | null;
    isInvalid: boolean;
    isEmpty: boolean;
}

export interface IResultIQPoints {
    verbalIQ: number;
    nonverbalIQ: number;
    commonIQ: number;
}

export interface IResultPoints {
    verbal: number;
    nonverbal: number;
    common: number;
}

export type TestName = keyof IPeriodSubtests;

export type FileName = Brand<string, 'file_name'>;

export type FileContent = Brand<string, 'file_content'>;

export type FileType = 'application/json';

export type StringifiedDateType = string;

export type IConclusionDto = string;

export type IDateDto = StringifiedDateType;

export interface IStudentDto {
    readonly name: string | null;
    readonly birthDate: string | null;
    readonly gender: StudentGender;
}

export interface ISubtestDto {
    readonly name: string;
    readonly rawPoints: number | null;
    readonly scalePoints: number | null;
    readonly normalPoints: number | null;
    readonly isInvalid: boolean;
    readonly isEmpty: boolean;
}

export interface IPeriodDto {
    readonly type: string;
    readonly verbalSubtests: ReadonlyArray<ISubtestDto>;
    readonly nonverbalSubtests: ReadonlyArray<ISubtestDto>;
}