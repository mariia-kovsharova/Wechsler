import { Subtest, SubtestName } from '../subtest';

export class ImagesSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('images' as SubtestName, values);
    }
}
