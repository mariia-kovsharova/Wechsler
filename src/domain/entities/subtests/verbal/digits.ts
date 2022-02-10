import { Subtest } from '../subtest';

export class DigitsRepeatSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('digits', values);
    }
}
