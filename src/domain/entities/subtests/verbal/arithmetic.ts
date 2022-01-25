import { Subtest, SubtestName } from '../subtest';

export class ArithmeticSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('arithmetic' as SubtestName, values);
    }
}
