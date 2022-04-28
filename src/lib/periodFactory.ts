import { differenceInMonths } from 'date-fns';
import {
    FiveYearsFromEightToElevenMonths,
    FiveYearsFromFourToSevenMonths, FiveYearsFromZeroToThreeMonths, Period,
} from '../domain/entities/period';
import {
    EightYearsFromEightToElevenMonths,
    EightYearsFromFourToSevenMonths, EightYearsFromZeroToThreeMonths,
} from '../domain/entities/period/8. eight-years';
import {
    NineYearsFromEightToElevenMonths,
    NineYearsFromFourToSevenMonths, NineYearsFromZeroToThreeMonths,
} from '../domain/entities/period/9. nine-years';
import {
    SevenYearsFromEightToElevenMonths,
    SevenYearsFromFourToSevenMonths, SevenYearsFromZeroToThreeMonths,
} from '../domain/entities/period/7. seven-years';
import {
    SixYearsFromEightToElevenMonths,
    SixYearsFromFourToSevenMonths, SixYearsFromZeroToThreeMonths,
} from '../domain/entities/period/6. six-years';
import { StudentDate, TestDate } from '../domain/types';

export const periodFactory = (testDate: TestDate, studentBirthDate: StudentDate): Period | null => {
    const monthsCount = differenceInMonths(testDate, studentBirthDate);

    switch (true) {
        // 5 years 0 months - 5 years 3 months
        case (monthsCount >= 60 && monthsCount < 64):
            return new FiveYearsFromZeroToThreeMonths();
        // 5 years 4 months - 5 years 7 months
        case (monthsCount >= 64 && monthsCount < 68):
            return new FiveYearsFromFourToSevenMonths();
        // 5 years 8 months - 5 years 11 months
        case (monthsCount >= 68 && monthsCount < 72):
            return new FiveYearsFromEightToElevenMonths();

        // 6 years 0 months - 6 years 3 months
        case (monthsCount >= 72 && monthsCount < 76):
            return new SixYearsFromZeroToThreeMonths();
        // 6 years 4 months - 6 years 7 months
        case (monthsCount >= 76 && monthsCount < 80):
            return new SixYearsFromFourToSevenMonths();
        // 6 years 8 months - 6 years 11 months
        case (monthsCount >= 80 && monthsCount < 84):
            return new SixYearsFromEightToElevenMonths();

        // 7 years 0 months - 7 years 3 months
        case (monthsCount >= 84 && monthsCount < 88):
            return new SevenYearsFromZeroToThreeMonths();
        // 7 years 4 months - 7 years 7 months
        case (monthsCount >= 88 && monthsCount < 92):
            return new SevenYearsFromFourToSevenMonths();
        // 7 years 8 months - 7 years 11 months
        case (monthsCount >= 92 && monthsCount < 96):
            return new SevenYearsFromEightToElevenMonths();

        // 8 years 0 months - 8 years 3 months
        case (monthsCount >= 96 && monthsCount < 100):
            return new EightYearsFromZeroToThreeMonths();
        // 8 years 4 months - 8 years 7 months
        case (monthsCount >= 100 && monthsCount < 104):
            return new EightYearsFromFourToSevenMonths();
        // 8 years 8 months - 8 years 11 months
        case (monthsCount >= 104 && monthsCount < 108):
            return new EightYearsFromEightToElevenMonths();

        // 9 years 0 months - 9 years 3 months
        case (monthsCount >= 108 && monthsCount < 112):
            return new NineYearsFromZeroToThreeMonths();
        // 9 years 4 months - 9 years 7 months
        case (monthsCount >= 112 && monthsCount < 116):
            return new NineYearsFromFourToSevenMonths();
        // 9 years 8 months - 9 years 11 months
        case (monthsCount >= 116 && monthsCount < 120):
            return new NineYearsFromEightToElevenMonths();
        default:
            return null;
    }
};
