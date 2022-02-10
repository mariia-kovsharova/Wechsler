import { Subtest } from '../subtest';

export class ArithmeticSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('arithmetic', values);
    }
}
