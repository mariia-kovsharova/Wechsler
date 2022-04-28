/* eslint-disable max-len */
import { PeriodType } from '../../../ports';
import {
    ArithmeticSubtest, AwarenessSubtest, ComprehensibilitySubtest,
    CubesSubtest, DetailsSubtest, DigitsRepeatSubtest,
    EncryptionSubtest, FiguresSubtest, ImagesSubtest,
    LabyrinthsSubtest, LexicalSubtest, SimilaritySubtest,
} from '../../subtests';
import { Period } from '../period';

const TRANSLATE_DESCRIPTION = 'range.seven-years.from-four-to-seven';

export class SevenYearsFromFourToSevenMonths extends Period {
    constructor() {
        super(PeriodType.SEVEN_FOUR_SEVEN, TRANSLATE_DESCRIPTION);
    }

    protected initVerbalSubtests(): void {
        this.awareness = new AwarenessSubtest([0, 1, 2, 3, 4, 5, 6, 8, 9, 11, 12, 14, 16, 17, 18, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        this.comprehensibility = new ComprehensibilitySubtest([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        this.arithmetic = new ArithmeticSubtest([1, 3, 4, 5, 7, 9, 11, 13, 15, 17, 19, 20, 20, 20, 20, 20, 20]);
        this.similarity = new SimilaritySubtest([2, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 17, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        this.lexical = new LexicalSubtest([0, 0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        this.digits = new DigitsRepeatSubtest([2, 3, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 18, 20, 20, 20, 20, 20]);

    }

    protected initInverbalSubtests(): void {
        this.details = new DetailsSubtest([1, 2, 3, 4, 5, 6, 7, 9, 10, 12, 13, 14, 16, 17, 18, 19, 20, 20, 20, 20, 20]);
        this.images = new ImagesSubtest([1, 2, 3, 4, 6, 6, 7, 7, 8, 8, 9, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 14, 14, 15, 15, 16, 17, 17, 18, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        this.cubes = new CubesSubtest([3, 4, 5, 6, 7, 8, 10, 11, 11, 11, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 18, 18, 18, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        this.figures = new FiguresSubtest([0, 1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 15, 16, 17, 18, 19, 20, 20, 20, 20, 20, 20, 20]);
        this.encryption = new EncryptionSubtest([0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 13, 14, 15, 16, 17, 18]);
        this.labyrinths = new LabyrinthsSubtest([4, 5, 5, 6, 6, 7, 7, 8, 9, 9, 10, 10, 11, 11, 12, 13, 14, 15, 16, 18, 19, 20]);
    }
}
