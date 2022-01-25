/* eslint-disable max-len */
import {
    ArithmeticSubtest, AwarenessSubtest, ComprehensibilitySubtest,
    CubesSubtest, DetailsSubtest, DigitsRepeatSubtest,
    EncryptionSubtest, FiguresSubtest, ImagesSubtest,
    LabyrinthsSubtest, LexicalSubtest, SimilaritySubtest,
    Subtest,
} from '../../subtests';
import { Period } from '../period';

const AGE_RANGE_NAME = '5 лет 0 месяцев - 5 лет 3 месяца';

export class FiveYearsFromZeroToThreeMonths extends Period {
    constructor() {
        super(AGE_RANGE_NAME);
    }

    protected getVerbalSubtests(): readonly Subtest[] {
        const awareness = new AwarenessSubtest([2, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        const comprehensibility = new ComprehensibilitySubtest([3, 4, 6, 8, 9, 10, 12, 13, 14, 16, 18, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        const arithmetic = new ArithmeticSubtest([5, 7, 9, 10, 12, 15, 18, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        const similarity = new SimilaritySubtest([4, 6, 8, 10, 11, 13, 14, 16, 17, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        const lexical = new LexicalSubtest([2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8, 9, 10, 11, 11, 12, 13, 14, 15, 16, 16, 17, 17, 18, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        const words = new DigitsRepeatSubtest([3, 4, 5, 6, 8, 10, 12, 13, 14, 16, 18, 20, 20, 20, 20, 20, 20, 20]);

        return [awareness, comprehensibility, arithmetic, similarity, lexical, words];
    }

    protected getInverbalSubtests(): readonly Subtest[] {
        const details = new DetailsSubtest([3, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 17, 18, 19, 20, 20, 20, 20, 20, 20, 20]);
        const images = new ImagesSubtest([3, 5, 7, 9, 11, 12, 13, 13, 14, 14, 14, 15, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        const cubes = new CubesSubtest([5, 7, 8, 9, 10, 12, 13, 14, 14, 14, 15, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        const figures = new FiguresSubtest([3, 4, 5, 6, 7, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 15, 15, 16, 17, 18, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
        const encription = new EncryptionSubtest([3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 18, 18, 19, 19, 20, 20, 20, 20, 20]);
        const labyrinth = new LabyrinthsSubtest([5, 7, 8, 8, 9, 10, 11, 11, 12, 12, 13, 14, 14, 15, 15, 16, 17, 18, 19, 20, 20, 20]);

        return [details, images, cubes, figures, encription, labyrinth];
    }
}
