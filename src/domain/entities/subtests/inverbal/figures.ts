import { Subtest, SubtestName } from '../subtest';

export class FiguresSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('figures' as SubtestName, values);
    }
}
