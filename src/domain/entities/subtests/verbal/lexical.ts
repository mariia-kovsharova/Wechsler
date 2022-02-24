import { Subtest } from '../subtest';

export class LexicalSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('lexical', values, 9);
    }
}
