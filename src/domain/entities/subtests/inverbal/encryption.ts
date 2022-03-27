import { ISubtest } from '../../../types';
import { Subtest } from '../subtest';

const NORMAL_POINT_VALUE = 8;

export class EncryptionSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>, points: number | null) {
        super('encryption', values, NORMAL_POINT_VALUE, points);
    }

    public update(points: number | null): ISubtest {
        return new EncryptionSubtest(this.values, points);
    }
}
