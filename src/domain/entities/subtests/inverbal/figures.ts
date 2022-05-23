import { Subtest } from '../subtest';

const NORMAL_POINT_VALUE = 7;

export class FiguresSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>, points: number | null = null) {
        super('figures', values, NORMAL_POINT_VALUE, points);
    }

    public update(points: number | null): FiguresSubtest {
        return new FiguresSubtest(this.values, points);
    }
}
