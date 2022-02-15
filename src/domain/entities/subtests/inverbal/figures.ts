import { Subtest } from '../subtest';

export class FiguresSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('figures', values, 7);
    }
}
