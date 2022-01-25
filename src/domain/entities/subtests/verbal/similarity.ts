import { Subtest, SubtestName } from '../subtest';

export class SimilaritySubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('similarity' as SubtestName, values);
    }
}
