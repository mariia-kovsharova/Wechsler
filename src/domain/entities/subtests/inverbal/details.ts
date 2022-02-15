import { Subtest } from '../subtest';

export class DetailsSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('details', values, 8);
    }
}
