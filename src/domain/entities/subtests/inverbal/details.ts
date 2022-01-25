import { Subtest, SubtestName } from '../subtest';

export class DetailsSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('details' as SubtestName, values);
    }
}
