import { Subtest } from '../subtest';

export class AwarenessSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('awareness', values);
    }
}
