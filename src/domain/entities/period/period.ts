import { Subtest } from '../subtests/subtest';

const MINIMAL_COUNT_OF_TESTS_IN_GROUP = 4;
const MAXIMUM_COUNT_OF_TESTS_IN_GROUP = 6;

export abstract class Period {
    public readonly description: string;

    private verbalSubtests: ReadonlyArray<Subtest>;

    private inverbalSubtests: ReadonlyArray<Subtest>;

    constructor(description: string) {
        this.description = description;
        this.verbalSubtests = this.getVerbalSubtests();
        this.inverbalSubtests = this.getInverbalSubtests();
    }

    protected abstract getVerbalSubtests(): ReadonlyArray<Subtest>;
    protected abstract getInverbalSubtests(): ReadonlyArray<Subtest>;

    // public getInvalidTests(): TestError[] {
    //     const mapper = (test: AbstractTest) => test.validate();

    //     const nonNull = <T>(x: T | null): x is T => x !== null;

    //     const verbal = this.verbalTests.map(mapper).filter(nonNull);
    //     const inverbal = this.inverbalTests.map(mapper).filter(nonNull);

    //     return verbal.concat(inverbal);
    // }

    // public updateTestValue(name: string, newValue: number | null): void {
    //     // TODO: в ФП стиле будет не мутация, а создание нового теста. Только как определить?
    //     const unchangedTests = this.tests.filter((test: AbstractTest) => test.getName() !== name);
    //     const changedTest = this.tests.find((test: AbstractTest) => test.getName() === name);

    //     if (changedTest) {
    //         changedTest.rawPoints = newValue;
    //         this.tests = [...unchangedTests, changedTest];
    //     }
    // }

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

    // public get verbalTests(): ReadonlyArray<AbstractTest> {
    //     return this.tests.filter((test: AbstractTest): boolean => test.isVerbal());
    // }

    // public get inverbalTests(): ReadonlyArray<AbstractTest> {
    //     return this.tests.filter((test: AbstractTest): boolean => test.isInverbal());
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


}
