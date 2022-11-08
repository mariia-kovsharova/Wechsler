import { Subtest } from '../subtest';

const NORMAL_POINT_VALUE = 7;

export class ImagesSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>, points: number | null = null) {
        super('images', values, NORMAL_POINT_VALUE, points);
    }

    public update(points: number | null): ImagesSubtest {
        return new ImagesSubtest(this.values, points);
    }
}
