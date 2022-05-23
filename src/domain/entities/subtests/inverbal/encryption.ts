import { Subtest } from '../subtest';

const NORMAL_POINT_VALUE = 8;

export class EncryptionSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>, points: number | null = null) {
        super('encryption', values, NORMAL_POINT_VALUE, points);
    }

    public update(points: number | null): EncryptionSubtest {
        return new EncryptionSubtest(this.values, points);
    }
}
