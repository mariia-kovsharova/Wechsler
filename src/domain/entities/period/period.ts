import { Getter } from '../../../lib/getter';
import { isNil } from '../../../lib/utils';
import {
    ArithmeticSubtest, AwarenessSubtest, ComprehensibilitySubtest,
    CubesSubtest, DetailsSubtest, DigitsRepeatSubtest,
    EncryptionSubtest, FiguresSubtest, ImagesSubtest,
    LabyrinthsSubtest, LexicalSubtest, SimilaritySubtest,
} from '../subtests';
import { Subtest } from '../subtests/subtest';

const MINIMAL_COUNT_OF_TESTS_IN_GROUP = 4;
const MAXIMUM_COUNT_OF_TESTS_IN_GROUP = 6;

export interface IPeriod {
    awareness: AwarenessSubtest;
    // comprehensibility: ComprehensibilitySubtest;
    // arithmetic: ArithmeticSubtest;
    // similarity: SimilaritySubtest;
    // lexical: LexicalSubtest;
    // digitsRepeat: DigitsRepeatSubtest;
    // details: DetailsSubtest;
    // images: ImagesSubtest;
    // cubes: CubesSubtest;
    // figures: FiguresSubtest;
    // encription: EncryptionSubtest;
    // labyrinth: LabyrinthsSubtest;
}

export type TestName = keyof IPeriod;

export abstract class Period implements Readonly<IPeriod> {
    public readonly description: string;

    private _awareness!: AwarenessSubtest;

    public get awareness(): AwarenessSubtest {
        return this._awareness;
    }

    protected set awareness(value: AwarenessSubtest) {
        this._awareness = value;
    }

    protected comprehensibility!: ComprehensibilitySubtest;

    // public get comprehensibility(): ComprehensibilitySubtest {
    //     return this._comprehensibility;
    // }

    protected arithmetic!: ArithmeticSubtest;

    // public get arithmetic(): ArithmeticSubtest {
    //     return this._arithmetic;
    // }

    protected similarity!: SimilaritySubtest;

    // public get similarity(): SimilaritySubtest {
    //     return this._similarity;
    // }

    protected lexical!: LexicalSubtest;

    // public get lexical(): LexicalSubtest {
    //     return this._lexical;
    // }

    protected digitsRepeat!: DigitsRepeatSubtest;

    protected details!: DetailsSubtest;

    protected images!: ImagesSubtest;

    protected cubes!: CubesSubtest;

    protected figures!: FiguresSubtest;

    protected encription!: EncryptionSubtest;

    protected labyrinth!: LabyrinthsSubtest;

    constructor(description: string) {
        this.description = description;
        this.initVerbalSubtests();
        this.initInverbalSubtests();
        this.validateSubtests();
    }

    protected abstract initVerbalSubtests(): void;

    protected abstract initInverbalSubtests(): void;

    public get verbalSubtests(): ReadonlyArray<Subtest> {
        return [
            this.awareness,
            this.comprehensibility,
            this.arithmetic,
            this.similarity,
            this.lexical,
            this.digitsRepeat,
        ];
    }

    public get inverbalSubtests(): ReadonlyArray<Subtest> {
        return [
            this.details,
            this.images,
            this.cubes,
            this.figures,
            this.encription,
            this.labyrinth,
        ];
    }

    // public getInvalidTests(): TestError[] {
    //     const mapper = (test: AbstractTest) => test.validate();

    //     const nonNull = <T>(x: T | null): x is T => x !== null;

    //     const verbal = this.verbalTests.map(mapper).filter(nonNull);
    //     const inverbal = this.inverbalTests.map(mapper).filter(nonNull);

    //     return verbal.concat(inverbal);
    // }

    public updateTestValue(name: keyof IPeriod, value: number | null): void {
        this[name].rawPoints = value;
    }

    // public isTestCountValid(): boolean {
    //     const filledVerbalTests = this.verbalTests.filter((test: AbstractTest) => !test.isEmpty());
    //     const filledInverbalTests = this.inverbalTests.filter((test: AbstractTest) => !test.isEmpty());

    //     return (
    //         filledVerbalTests.length === filledInverbalTests.length
    //         && (filledVerbalTests.length === MINIMAL_COUNT_OF_TESTS_IN_GROUP
    //             || filledVerbalTests.length === MAXIMUM_COUNT_OF_TESTS_IN_GROUP)
    //     );
    // }

    // TODO: а точно мапа нужна?
    // public calculateVerbalResult(): ReadonlyMap<string, IResult> {
    //     return this.calculateResult(this.verbalTests);
    // }

    // public calculateInverbalResult(): ReadonlyMap<string, IResult> {
    //     return this.calculateResult(this.inverbalTests);
    // }

    // private calculateResult(values: ReadonlyArray<AbstractTest>): ReadonlyMap<string, IResult> {
    //     return values.reduce((map, test) => {
    //         const name = test.getName();
    //         const rawPoints = test.getRawPoints();
    //         const scalePoints = test.getScalePoints();
    //         const order = test.getOrder();

    //         const result: IResult = { rawPoints, scalePoints, order };
    //         map.set(name, result);

    //         return map;
    //     }, new Map());
    // }

    private validateSubtests(): void | never {
        const areVerbalSubtestsInitialized = this.verbalSubtests.every(x => !isNil(x));
        const areInverbalSubtestsInitialized = this.inverbalSubtests.every(x => !isNil(x));

        if (!areVerbalSubtestsInitialized) {
            throw new Error('One of verbal test is not initialized!');
        }

        if (!areInverbalSubtestsInitialized) {
            throw new Error('One of inverbal test is not initialized!');
        }
    }
}
