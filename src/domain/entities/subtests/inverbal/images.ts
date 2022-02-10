import { Subtest } from '../subtest';

export class ImagesSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('images', values);
    }
}
