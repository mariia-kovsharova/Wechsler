import { Subtest } from '../subtest';

const NORMAL_POINT_VALUE = 7;

export class LabyrinthsSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>, points: number | null = null) {
        super('labyrinths', values, NORMAL_POINT_VALUE, points);
    }

    public update(points: number | null): LabyrinthsSubtest {
        return new LabyrinthsSubtest(this.values, points);
    }
}
