import { Subtest } from '../subtest';

export class EncryptionSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('encryption', values, 8);
    }
}
