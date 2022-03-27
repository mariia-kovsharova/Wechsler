import { Subtest } from '../subtest';

const NORMAL_POINT_VALUE = 7;

export class AwarenessSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>, points: number | null = null) {
        super('awareness', values, NORMAL_POINT_VALUE, points);
    }

    public update(points: number | null): AwarenessSubtest {
        return new AwarenessSubtest(this.values, points);
    }
}
