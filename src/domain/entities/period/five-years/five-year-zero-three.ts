/* eslint-disable max-len */
import {
    ArithmeticSubtest, AwarenessSubtest, ComprehensibilitySubtest,
    CubesSubtest, DetailsSubtest, DigitsRepeatSubtest,
    EncryptionSubtest, FiguresSubtest, ImagesSubtest,
    LabyrinthsSubtest, LexicalSubtest, SimilaritySubtest,
} from '../../subtests';
import { Period } from '../period';

const TRANSLATE = 'range.five-years.from-zero-to-three';

export class FiveYearsFromZeroToThreeMonths extends Period {
    constructor() {
        super(TRANSLATE);
    }

    protected initVerbalSubtests(): void {
        this.awareness = new AwarenessSubtest([2, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        this.comprehensibility = new ComprehensibilitySubtest([3, 4, 6, 8, 9, 10, 12, 13, 14, 16, 18, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        this.arithmetic = new ArithmeticSubtest([5, 7, 9, 10, 12, 15, 18, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        this.similarity = new SimilaritySubtest([4, 6, 8, 10, 11, 13, 14, 16, 17, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        this.lexical = new LexicalSubtest([2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8, 9, 10, 11, 11, 12, 13, 14, 15, 16, 16, 17, 17, 18, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        this.digitsRepeat = new DigitsRepeatSubtest([3, 4, 5, 6, 8, 10, 12, 13, 14, 16, 18, 20, 20, 20, 20, 20, 20, 20]);
    }

    protected initInverbalSubtests(): void {
        this.details = new DetailsSubtest([3, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 17, 18, 19, 20, 20, 20, 20, 20, 20, 20]);
        this.images = new ImagesSubtest([3, 5, 7, 9, 11, 12, 13, 13, 14, 14, 14, 15, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        this.cubes = new CubesSubtest([5, 7, 8, 9, 10, 12, 13, 14, 14, 14, 15, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        this.figures = new FiguresSubtest([3, 4, 5, 6, 7, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 15, 15, 16, 17, 18, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        this.encription = new EncryptionSubtest([3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 18, 18, 19, 19, 20, 20, 20, 20, 20]);
        this.labyrinth = new LabyrinthsSubtest([5, 7, 8, 8, 9, 10, 11, 11, 12, 12, 13, 14, 14, 15, 15, 16, 17, 18, 19, 20, 20, 20]);
    }
}
