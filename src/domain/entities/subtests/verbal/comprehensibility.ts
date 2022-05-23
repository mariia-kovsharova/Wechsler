import { Subtest } from '../subtest';

const NORMAL_POINT_VALUE = 7;

export class ComprehensibilitySubtest extends Subtest {
    constructor(values: ReadonlyArray<number>, points: number | null = null) {
        super('comprehensibility', values, NORMAL_POINT_VALUE, points);
    }

    public update(points: number | null): ComprehensibilitySubtest {
        return new ComprehensibilitySubtest(this.values, points);
    }
}
