import { Subtest, SubtestName } from '../subtest';

export class LexicalSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('lexical' as SubtestName, values);
    }
}
