/* eslint-disable max-len */
import { PeriodType } from '../../../ports';
import {
    ArithmeticSubtest, AwarenessSubtest, ComprehensibilitySubtest,
    CubesSubtest, DetailsSubtest, DigitsRepeatSubtest,
    EncryptionSubtest, FiguresSubtest, ImagesSubtest,
    LabyrinthsSubtest, LexicalSubtest, SimilaritySubtest,
} from '../../subtests';
import { Period } from '../period';

const TRANSLATE_DESCRIPTION = 'range.six-years.from-zero-to-three';

export class SixYearsFromZeroToThreeMonths extends Period {
    constructor() {
        super(PeriodType.SIX_ZERO_THREE, TRANSLATE_DESCRIPTION);
    }

    protected initVerbalSubtests(): void {
        this.awareness = new AwarenessSubtest([1, 3, 4, 5, 6, 7, 9, 11, 13, 14, 16, 17, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        this.comprehensibility = new ComprehensibilitySubtest([3, 4, 5, 7, 8, 9, 11, 12, 13, 14, 15, 17, 18, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        this.arithmetic = new ArithmeticSubtest([3, 5, 6, 8, 10, 12, 15, 18, 19, 20, 20, 20, 20, 20, 20, 20, 20]);
        this.similarity = new SimilaritySubtest([3, 5, 7, 9, 10, 12, 13, 14, 15, 17, 18, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        this.lexical = new LexicalSubtest([1, 1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 9, 10, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        this.digits = new DigitsRepeatSubtest([2, 3, 4, 5, 7, 8, 10, 11, 13, 15, 17, 19, 20, 20, 20, 20, 20, 20]);
    }

    protected initNonverbalSubtests(): void {
        this.details = new DetailsSubtest([2, 4, 5, 6, 7, 8, 9, 11, 13, 14, 15, 16, 17, 18, 19, 20, 20, 20, 20, 20, 20]);
        this.images = new ImagesSubtest([2, 4, 6, 7, 8, 9, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 15, 15, 16, 16, 17, 18, 18, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        this.cubes = new CubesSubtest([4, 6, 7, 8, 9, 11, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        this.figures = new FiguresSubtest([2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 14, 14, 15, 16, 16, 17, 18, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        this.encryption = new EncryptionSubtest([2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 16, 17, 18, 19, 20]);
        this.labyrinths = new LabyrinthsSubtest([5, 6, 7, 7, 8, 9, 10, 10, 12, 13, 13, 14, 14, 15, 16, 17, 18, 19, 20, 20]);
    }
}
