import { Subtest } from '../subtest';

export class ComprehensibilitySubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('comprehensibility', values);
    }
}
