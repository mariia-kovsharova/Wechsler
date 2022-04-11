import differenceInDays from 'date-fns/differenceInDays';
import {
    FiveYearsFromEightToElevenMonths,
    FiveYearsFromFourToSevenMonths, FiveYearsFromZeroToThreeMonths, Period,
} from '../domain/entities/period';
import {
    EightYearsFromEightToElevenMonths,
    EightYearsFromFourToSevenMonths, EightYearsFromZeroToThreeMonths,
} from '../domain/entities/period/eight-years';
import {
    NineYearsFromEightToElevenMonths,
    NineYearsFromFourToSevenMonths, NineYearsFromZeroToThreeMonths,
} from '../domain/entities/period/nine-years';
import {
    SevenYearsFromEightToElevenMonths,
    SevenYearsFromFourToSevenMonths, SevenYearsFromZeroToThreeMonths,
} from '../domain/entities/period/seven-years';
import {
    SixYearsFromEightToElevenMonths,
    SixYearsFromFourToSevenMonths, SixYearsFromZeroToThreeMonths,
} from '../domain/entities/period/six-years';
import { StudentDate, TestDate } from '../domain/types';

export const periodFactory = (testDate: TestDate, studentBirthDate: StudentDate): Period | null => {
    const daysCount = differenceInDays(testDate, studentBirthDate);

    switch (true) {
        // 5 years 0 months - 5 years 3 months
        case (daysCount >= 1825 && daysCount <= 1919):
            return new FiveYearsFromZeroToThreeMonths();
        // 5 years 4 months - 5 years 7 months
        case (daysCount >= 1920 && daysCount <= 2039):
            return new FiveYearsFromFourToSevenMonths();
        // 5 years 8 months - 5 years 11 months
        case (daysCount >= 2040 && daysCount <= 2159):
            return new FiveYearsFromEightToElevenMonths();

        // 6 years 0 months - 6 years 3 months
        case (daysCount >= 2160 && daysCount <= 2279):
            return new SixYearsFromZeroToThreeMonths();
        // 6 years 4 months - 6 years 7 months
        case (daysCount >= 2280 && daysCount <= 2399):
            return new SixYearsFromFourToSevenMonths();
        // 6 years 8 months - 6 years 11 months
        case (daysCount >= 2400 && daysCount <= 2519):
            return new SixYearsFromEightToElevenMonths();

        // 7 years 0 months - 7 years 3 months
        case (daysCount >= 2520 && daysCount <= 2639):
            return new SevenYearsFromZeroToThreeMonths();
        // 7 years 4 months - 7 years 7 months
        case (daysCount >= 2640 && daysCount <= 2759):
            return new SevenYearsFromFourToSevenMonths();
        // 7 years 8 months - 7 years 11 months
        case (daysCount >= 2760 && daysCount <= 2879):
            return new SevenYearsFromEightToElevenMonths();

        // 8 years 0 months - 8 years 3 months
        case (daysCount >= 2880 && daysCount <= 2999):
            return new EightYearsFromZeroToThreeMonths();
        // 8 years 4 months - 8 years 7 months
        case (daysCount >= 3000 && daysCount <= 3119):
            return new EightYearsFromFourToSevenMonths();
        // 8 years 8 months - 8 years 11 months
        case (daysCount >= 3120 && daysCount <= 3239):
            return new EightYearsFromEightToElevenMonths();

        // 9 years 0 months - 9 years 3 months
        case (daysCount >= 3240 && daysCount <= 3359):
            return new NineYearsFromZeroToThreeMonths();
        // 9 years 4 months - 9 years 7 months
        case (daysCount >= 3360 && daysCount <= 3479):
            return new NineYearsFromFourToSevenMonths();
        // 9 years 8 months - 9 years 11 months
        case (daysCount >= 3480 && daysCount <= 3599):
            return new NineYearsFromEightToElevenMonths();
        default:
            return null;
    }
};
