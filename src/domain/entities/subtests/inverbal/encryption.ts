import { Subtest, SubtestName } from '../subtest';

export class EncryptionSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('encryption' as SubtestName, values);
    }
}
