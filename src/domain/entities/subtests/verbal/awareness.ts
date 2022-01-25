import { Subtest, SubtestName } from '../subtest';

export class AwarenessSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('awareness' as SubtestName, values);
    }
}
