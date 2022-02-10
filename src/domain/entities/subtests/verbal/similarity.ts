import { Subtest } from '../subtest';

export class SimilaritySubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('similarity', values);
    }
}
