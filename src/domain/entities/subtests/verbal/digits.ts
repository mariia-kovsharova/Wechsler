import { Subtest } from '../subtest';

const NORMAL_POINT_VALUE = 6;

export class DigitsRepeatSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>, points: number | null = null) {
        super('digits', values, NORMAL_POINT_VALUE, points);
    }

    public update(points: number | null): DigitsRepeatSubtest {
        return new DigitsRepeatSubtest(this.values, points);
    }
}
