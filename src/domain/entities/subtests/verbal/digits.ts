import { Subtest, SubtestName } from '../subtest';

export class DigitsRepeatSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('digits' as SubtestName, values);
    }
}
