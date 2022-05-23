import { Subtest } from '../subtest';

const NORMAL_POINT_VALUE = 9;

export class ArithmeticSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>, points: number | null = null) {
        super('arithmetic', values, NORMAL_POINT_VALUE, points);
    }

    public update(points: number | null): ArithmeticSubtest {
        return new ArithmeticSubtest(this.values, points);
    }
}
