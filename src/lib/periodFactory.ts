import {
    ElevenYearsFromEightToElevenMonths,
    ElevenYearsFromFourToSevenMonths,
    ElevenYearsFromZeroToThreeMonths,
    FifteenYearsFromEightToElevenMonths,
    FifteenYearsFromFourToSevenMonths,
    FifteenYearsFromZeroToThreeMonths,
    FiveYearsFromEightToElevenMonths,
    FiveYearsFromFourToSevenMonths,
    FiveYearsFromZeroToThreeMonths,
    FourteenYearsFromEightToElevenMonths,
    FourteenYearsFromFourToSevenMonths,
    FourteenYearsFromZeroToThreeMonths,
    Period,
    TenYearsFromEightToElevenMonths,
    TenYearsFromFourToSevenMonths,
    TenYearsFromZeroToThreeMonths,
    ThirteenYearsFromEightToElevenMonths,
    ThirteenYearsFromFourToSevenMonths,
    ThirteenYearsFromZeroToThreeMonths,
    TwelveYearsFromEightToElevenMonths,
    TwelveYearsFromFourToSevenMonths,
    TwelveYearsFromZeroToThreeMonths,
} from '../domain/entities/period';
import {
    SixYearsFromEightToElevenMonths,
    SixYearsFromFourToSevenMonths,
    SixYearsFromZeroToThreeMonths,
} from '../domain/entities/period/6. six-years';
import {
    SevenYearsFromEightToElevenMonths,
    SevenYearsFromFourToSevenMonths,
    SevenYearsFromZeroToThreeMonths,
} from '../domain/entities/period/7. seven-years';
import {
    EightYearsFromEightToElevenMonths,
    EightYearsFromFourToSevenMonths,
    EightYearsFromZeroToThreeMonths,
} from '../domain/entities/period/8. eight-years';
import {
    NineYearsFromEightToElevenMonths,
    NineYearsFromFourToSevenMonths,
    NineYearsFromZeroToThreeMonths,
} from '../domain/entities/period/9. nine-years';
import { IDateTransformService } from '../domain/ports';
import { StudentDate, TestDate } from '../domain/types';

export const periodFactory = (
    testDate: TestDate,
    studentBirthDate: StudentDate,
    dateTransformService: IDateTransformService,
): Period | null => {
    const monthsCount = dateTransformService.getDiffInMonths(
        testDate,
        studentBirthDate,
    );

    switch (true) {
        // 5 years 0 months - 5 years 3 months
        case monthsCount >= 60 && monthsCount < 64:
            return new FiveYearsFromZeroToThreeMonths();
        // 5 years 4 months - 5 years 7 months
        case monthsCount >= 64 && monthsCount < 68:
            return new FiveYearsFromFourToSevenMonths();
        // 5 years 8 months - 5 years 11 months
        case monthsCount >= 68 && monthsCount < 72:
            return new FiveYearsFromEightToElevenMonths();

        // 6 years 0 months - 6 years 3 months
        case monthsCount >= 72 && monthsCount < 76:
            return new SixYearsFromZeroToThreeMonths();
        // 6 years 4 months - 6 years 7 months
        case monthsCount >= 76 && monthsCount < 80:
            return new SixYearsFromFourToSevenMonths();
        // 6 years 8 months - 6 years 11 months
        case monthsCount >= 80 && monthsCount < 84:
            return new SixYearsFromEightToElevenMonths();

        // 7 years 0 months - 7 years 3 months
        case monthsCount >= 84 && monthsCount < 88:
            return new SevenYearsFromZeroToThreeMonths();
        // 7 years 4 months - 7 years 7 months
        case monthsCount >= 88 && monthsCount < 92:
            return new SevenYearsFromFourToSevenMonths();
        // 7 years 8 months - 7 years 11 months
        case monthsCount >= 92 && monthsCount < 96:
            return new SevenYearsFromEightToElevenMonths();

        // 8 years 0 months - 8 years 3 months
        case monthsCount >= 96 && monthsCount < 100:
            return new EightYearsFromZeroToThreeMonths();
        // 8 years 4 months - 8 years 7 months
        case monthsCount >= 100 && monthsCount < 104:
            return new EightYearsFromFourToSevenMonths();
        // 8 years 8 months - 8 years 11 months
        case monthsCount >= 104 && monthsCount < 108:
            return new EightYearsFromEightToElevenMonths();

        // 9 years 0 months - 9 years 3 months
        case monthsCount >= 108 && monthsCount < 112:
            return new NineYearsFromZeroToThreeMonths();
        // 9 years 4 months - 9 years 7 months
        case monthsCount >= 112 && monthsCount < 116:
            return new NineYearsFromFourToSevenMonths();
        // 9 years 8 months - 9 years 11 months
        case monthsCount >= 116 && monthsCount < 120:
            return new NineYearsFromEightToElevenMonths();

        // 10 years 0 months - 10 years 3 months
        case monthsCount >= 120 && monthsCount < 124:
            return new TenYearsFromZeroToThreeMonths();
        // 10 years 4 months - 10 years 7 months
        case monthsCount >= 124 && monthsCount < 128:
            return new TenYearsFromFourToSevenMonths();
        case monthsCount >= 128 && monthsCount < 132:
            return new TenYearsFromEightToElevenMonths();

        // 11 years 0 months - 11 years 3 months
        case monthsCount >= 132 && monthsCount < 136:
            return new ElevenYearsFromZeroToThreeMonths();
        case monthsCount >= 136 && monthsCount < 140:
            return new ElevenYearsFromFourToSevenMonths();
        case monthsCount >= 140 && monthsCount < 144:
            return new ElevenYearsFromEightToElevenMonths();

        // 12 years 0 months - 12 years 3 months
        case monthsCount >= 144 && monthsCount < 148:
            return new TwelveYearsFromZeroToThreeMonths();
        case monthsCount >= 148 && monthsCount < 152:
            return new TwelveYearsFromFourToSevenMonths();
        case monthsCount >= 152 && monthsCount < 156:
            return new TwelveYearsFromEightToElevenMonths();

        // 13 years 0 months - 13 years 3 months
        case monthsCount >= 156 && monthsCount < 160:
            return new ThirteenYearsFromZeroToThreeMonths();
        case monthsCount >= 160 && monthsCount < 164:
            return new ThirteenYearsFromFourToSevenMonths();
        case monthsCount >= 164 && monthsCount < 168:
            return new ThirteenYearsFromEightToElevenMonths();

        // 14 years 0 months - 14 years 3 months
        case monthsCount >= 168 && monthsCount < 172:
            return new FourteenYearsFromZeroToThreeMonths();
        case monthsCount >= 172 && monthsCount < 176:
            return new FourteenYearsFromFourToSevenMonths();
        case monthsCount >= 176 && monthsCount < 180:
            return new FourteenYearsFromEightToElevenMonths();

        // 15 years 0 months - 15 years 3 months
        case monthsCount >= 180 && monthsCount < 184:
            return new FifteenYearsFromZeroToThreeMonths();
        case monthsCount >= 184 && monthsCount < 188:
            return new FifteenYearsFromFourToSevenMonths();
        case monthsCount >= 188 && monthsCount < 192:
            return new FifteenYearsFromEightToElevenMonths();
        default:
            return null;
    }
};
