import { Subtest } from '../subtest';

export class CubesSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('cubes', values);
    }
}
