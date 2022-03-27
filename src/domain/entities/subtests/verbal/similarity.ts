import { Subtest } from '../subtest';

const NORMAL_POINT_VALUE = 8;

export class SimilaritySubtest extends Subtest {
    constructor(values: ReadonlyArray<number>, points: number | null = null) {
        super('similarity', values, NORMAL_POINT_VALUE, points);
    }

    public update(points: number | null): SimilaritySubtest {
        return new SimilaritySubtest(this.values, points);
    }
}
