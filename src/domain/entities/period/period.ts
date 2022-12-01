import { PeriodType } from '@ports';
import {
    IPeriod, IPeriodSubtests, IResultIQPoints,
    IResultPoints, ISubtest, NonverbalSubtestGroup, VerbalSubtestGroup
} from '@types';
import { isNil } from '@utils';
import {
    ArithmeticSubtest, AwarenessSubtest, ComprehensibilitySubtest,
    CubesSubtest, DetailsSubtest, DigitsRepeatSubtest,
    EncryptionSubtest, FiguresSubtest, ImagesSubtest,
    LabyrinthsSubtest, LexicalSubtest, SimilaritySubtest
} from '../subtests';

const MINIMAL_COUNT_OF_TESTS_IN_GROUP = 4;
const MAXIMUM_COUNT_OF_TESTS_IN_GROUP = 6;

const MIN_COUNT_POINTS = [
    0, 1, 3, 4, 5, 6, 8, 9, 10, 11, 13, 14, 15, 16,
    18, 19, 20, 21, 23, 24, 25, 26, 28, 29, 30, 31,
    33, 34, 35, 36, 38, 39, 40, 41, 43, 44, 45, 46,
    48, 49, 50, 51, 53, 54, 55, 56, 58, 59, 60, 61,
    63, 64, 65, 66, 68, 69, 70, 71, 73, 74, 75, 76,
    78, 79, 80, 81, 83, 84, 85, 86, 88, 89, 90, 91,
    93, 94, 95, 96, 98, 99, 100, 101, 103, 104, 105,
    106, 108, 109, 110, 111, 113, 114, 115, 116, 118,
    119, 120, 121, 123, 124, 125, 126, 128, 129, 130,
    131, 133, 134, 135, 136, 138, 139, 140, 141, 143,
    144, 145, 146, 148, 149, 150,
];

const MAX_COUNT_POINTS = [
    0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 12,
    13, 13, 14, 15, 16, 17, 18, 18, 19, 20, 21, 22,
    23, 23, 24, 25, 26, 27, 28, 28, 29, 30, 31, 32,
    33, 33, 34, 35, 36, 37, 38, 38, 39, 40, 41, 42,
    43, 43, 44, 45, 46, 47, 48, 48, 49, 50, 51, 52,
    53, 53, 54, 55, 56, 57, 58, 58, 59, 60, 61, 62,
    63, 63, 64, 65, 66, 67, 68, 68, 69, 70, 71, 72,
    73, 73, 74, 75, 76, 77, 78, 78, 79, 80, 81, 82,
    83, 83, 84, 85, 86, 87, 88, 88, 89, 90, 91, 92,
    93, 93, 94, 95, 96, 97, 98, 98, 99, 100,
];

const VERBAL_IQ_POINTS = [
    0, 0, 0, 0, 0, 0, 45, 46, 47, 48, 50, 51, 52, 53,
    55, 56, 57, 58, 60, 61, 62, 63, 65, 66, 67, 69, 70,
    71, 72, 74, 75, 76, 77, 79, 80, 81, 82, 84, 85, 86,
    87, 89, 90, 91, 92, 94, 95, 96, 97, 99, 100, 101,
    103, 104, 105, 106, 108, 109, 110, 111, 113, 114,
    115, 116, 118, 119, 120, 121, 123, 124, 125, 126,
    128, 129, 130, 131, 133, 134, 135, 137, 138, 139,
    140, 142, 143, 144, 145, 147, 148, 149, 150, 152,
    153, 154, 155,
];

const NONVERBAL_IQ_POINTS = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 46, 47, 48, 50, 51,
    53, 54, 55, 57, 58, 60, 61, 62, 64, 65, 67, 68, 69,
    71, 72, 74, 75, 76, 78, 79, 80, 82, 83, 85, 86, 87,
    89, 90, 92, 93, 94, 96, 97, 99, 100, 101, 103, 104,
    106, 107, 108, 110, 111, 113, 114, 115, 117, 118,
    120, 121, 122, 124, 125, 127, 128, 129, 131, 132,
    133, 135, 136, 138, 139, 140, 142, 143, 145, 146,
    147, 149, 150, 152, 153, 154, 156,
];

const ALL_IQ_POINTS = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 46, 47, 48, 48, 49, 50, 51,
    51, 52, 53, 54, 54, 55, 55, 56, 57, 58, 59, 59, 60,
    61, 62, 62, 63, 64, 64, 65, 66, 67, 67, 68, 69, 70,
    70, 71, 71, 72, 73, 74, 75, 75, 76, 77, 77, 78, 79,
    80, 80, 81, 82, 83, 83, 84, 85, 85, 86, 87, 88, 88,
    89, 90, 91, 91, 92, 93, 93, 94, 95, 96, 96, 97, 98,
    99, 99, 100, 101, 101, 102, 103, 104, 104, 105, 106,
    107, 107, 108, 109, 109, 110, 111, 112, 112, 113, 114,
    115, 115, 116, 117, 117, 118, 119, 120, 120, 121, 122,
    123, 123, 124, 125, 125, 126, 127, 128, 128, 129, 130,
    131, 131, 132, 133, 133, 134, 135, 136, 136, 137, 138,
    138, 139, 140, 141, 141, 142, 143, 144, 144, 145, 146,
    146, 147, 148, 149, 149, 150, 151, 152, 152, 153, 154, 154,
];

export abstract class Period implements Readonly<IPeriod>, IPeriodSubtests {
    public readonly description: string;

    private _awareness!: AwarenessSubtest;

    public get awareness(): AwarenessSubtest {
        return this._awareness;
    }

    protected set awareness(value: AwarenessSubtest) {
        this._awareness = value;
    }

    private _comprehensibility!: ComprehensibilitySubtest;

    public get comprehensibility(): ComprehensibilitySubtest {
        return this._comprehensibility;
    }

    protected set comprehensibility(value: ComprehensibilitySubtest) {
        this._comprehensibility = value;
    }

    private _arithmetic!: ArithmeticSubtest;

    public get arithmetic(): ArithmeticSubtest {
        return this._arithmetic;
    }

    protected set arithmetic(value: ArithmeticSubtest) {
        this._arithmetic = value;
    }

    private _similarity!: SimilaritySubtest;

    public get similarity(): SimilaritySubtest {
        return this._similarity;
    }

    protected set similarity(value: SimilaritySubtest) {
        this._similarity = value;
    }

    private _lexical!: LexicalSubtest;

    public get lexical(): LexicalSubtest {
        return this._lexical;
    }

    protected set lexical(value: LexicalSubtest) {
        this._lexical = value;
    }

    private _digits!: DigitsRepeatSubtest;

    public get digits(): DigitsRepeatSubtest {
        return this._digits;
    }

    protected set digits(value: DigitsRepeatSubtest) {
        this._digits = value;
    }

    private _details!: DetailsSubtest;

    public get details(): DetailsSubtest {
        return this._details;
    }

    protected set details(value: DetailsSubtest) {
        this._details = value;
    }

    private _images!: ImagesSubtest;

    public get images(): ImagesSubtest {
        return this._images;
    }

    protected set images(value: ImagesSubtest) {
        this._images = value;
    }

    private _cubes!: CubesSubtest;

    public get cubes(): CubesSubtest {
        return this._cubes;
    }

    protected set cubes(value: CubesSubtest) {
        this._cubes = value;
    }

    private _figures!: FiguresSubtest;

    public get figures(): FiguresSubtest {
        return this._figures;
    }

    protected set figures(value: FiguresSubtest) {
        this._figures = value;
    }

    private _encryption!: EncryptionSubtest;

    public get encryption(): EncryptionSubtest {
        return this._encryption;
    }

    protected set encryption(value: EncryptionSubtest) {
        this._encryption = value;
    }

    private _labyrinth!: LabyrinthsSubtest;

    public get labyrinths(): LabyrinthsSubtest {
        return this._labyrinth;
    }

    protected set labyrinths(value: LabyrinthsSubtest) {
        this._labyrinth = value;
    }

    private readonly _type: PeriodType;

    get type(): PeriodType {
        return this._type;
    }

    constructor(type: PeriodType, description: string) {
        this._type = type;
        this.description = description;
        this.initVerbalSubtests();
        this.initNonverbalSubtests();
        this.validateSubtests();
    }

    protected abstract initVerbalSubtests(): void;

    protected abstract initNonverbalSubtests(): void;

    public static getTruePoints(subtests: ReadonlyArray<ISubtest>, sum: number): number | never {
        const count = subtests.filter(x => !x.isEmpty).length;

        if (count === MINIMAL_COUNT_OF_TESTS_IN_GROUP) {
            return MIN_COUNT_POINTS[sum] ?? 0;
        }

        if (count === MAXIMUM_COUNT_OF_TESTS_IN_GROUP) {
            return MAX_COUNT_POINTS[sum] ?? 0;
        }

        throw new Error('Unknown count of tests!');
    }

    public static getIQPoints({ verbal, nonverbal, common }: IResultPoints): IResultIQPoints {
        const verbalIQ = VERBAL_IQ_POINTS[verbal] ?? null;
        const nonverbalIQ = NONVERBAL_IQ_POINTS[nonverbal] ?? null;
        const commonIQ = ALL_IQ_POINTS[common] ?? null;

        return { verbalIQ, nonverbalIQ, commonIQ };
    }

    public get verbalSubtests(): Readonly<VerbalSubtestGroup> {
        return [
            this.awareness,
            this.comprehensibility,
            this.arithmetic,
            this.similarity,
            this.lexical,
            this.digits,
        ] as const;
    }

    public get nonverbalSubtests(): Readonly<NonverbalSubtestGroup> {
        return [
            this.details,
            this.images,
            this.cubes,
            this.figures,
            this.encryption,
            this.labyrinths,
        ] as const;
    }

    public updateTestValue(name: keyof IPeriodSubtests, value: number | null): void {
        const subtest = this[name];
        this[name] = subtest.update(value);
    }

    public isTestCountValid(): boolean {
        const filledVerbalTests = this.verbalSubtests.filter(x => !(x.isEmpty || x.isInvalid));
        const filledNonverbalTests = this.nonverbalSubtests.filter(x => !(x.isEmpty || x.isInvalid));

        return (
            filledVerbalTests.length === filledNonverbalTests.length
            && (filledVerbalTests.length === MINIMAL_COUNT_OF_TESTS_IN_GROUP
                || filledVerbalTests.length === MAXIMUM_COUNT_OF_TESTS_IN_GROUP)
        );
    }

    private validateSubtests(): void | never {
        const areVerbalSubtestsInitialized = this.verbalSubtests.every(x => !isNil(x));
        const areNonverbalSubtestsInitialized = this.nonverbalSubtests.every(x => !isNil(x));

        if (!areVerbalSubtestsInitialized) {
            throw new Error('One of verbal test is not initialized!');
        }

        if (!areNonverbalSubtestsInitialized) {
            throw new Error('One of nonverbal test is not initialized!');
        }
    }
}
