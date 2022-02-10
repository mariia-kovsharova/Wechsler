export type Brand<T, B extends string> = T & { readonly _brand: B };

export type TestConclusion = Brand<string, 'wexler_test'>;

export type TestDate = Brand<Date, 'wexler_test'>;

export interface IPeriod {
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

export interface IResultIQPoints {
    verbalIQ: number;
    inverbalIQ: number;
    commonIQ: number;
}

export interface IResultPoints {
    verbal: number;
    inverbal: number;
    common: number;
}

export type TestName = keyof IPeriod;