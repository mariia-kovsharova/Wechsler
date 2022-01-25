import { Subtest, SubtestName } from '../subtest';

export class CubesSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('cubes' as SubtestName, values);
    }
}
