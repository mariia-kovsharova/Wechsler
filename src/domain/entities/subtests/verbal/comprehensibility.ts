import { Subtest, SubtestName } from '../subtest';

export class ComprehensibilitySubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('comprehensibility' as SubtestName, values);
    }
}
