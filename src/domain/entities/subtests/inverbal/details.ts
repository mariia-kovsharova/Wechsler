import { ISubtest } from '../../../types';
import { Subtest } from '../subtest';

const NORMAL_POINT_VALUE = 8;

export class DetailsSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>, points: number | null = null) {
        super('details', values, NORMAL_POINT_VALUE, points);
    }

    public update(points: number | null): ISubtest {
        return new DetailsSubtest(this.values, points);
    }
}
