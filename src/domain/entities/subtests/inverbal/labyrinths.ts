import { Subtest, SubtestName } from '../subtest';

export class LabyrinthsSubtest extends Subtest {
    constructor(values: ReadonlyArray<number>) {
        super('labyrinths' as SubtestName, values);
    }
}
