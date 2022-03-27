import { Subtest } from '../subtest';

const NORMAL_POINT_VALUE = 9;

export class LexicalSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>, points: number | null = null) {
        super('lexical', values, NORMAL_POINT_VALUE, points);
    }

    public update(points: number | null): LexicalSubtest {
        return new LexicalSubtest(this.values, points);
    }
}
