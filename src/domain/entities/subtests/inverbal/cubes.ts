import { Subtest } from '../subtest';

const NORMAL_POINT_VALUE = 8;

export class CubesSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>, points: number | null = null) {
        super('cubes', values, NORMAL_POINT_VALUE, points);
    }

    public update(points: number | null): CubesSubtest {
        return new CubesSubtest(this.values, points);
    }
}
