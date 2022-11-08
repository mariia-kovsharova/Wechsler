import {
    EightYearsFromEightToElevenMonths,
    EightYearsFromFourToSevenMonths,
    EightYearsFromZeroToThreeMonths,
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
    NineYearsFromEightToElevenMonths,
    NineYearsFromFourToSevenMonths,
    NineYearsFromZeroToThreeMonths,
    Period,
    SevenYearsFromEightToElevenMonths,
    SevenYearsFromFourToSevenMonths,
    SevenYearsFromZeroToThreeMonths,
    SixYearsFromEightToElevenMonths,
    SixYearsFromFourToSevenMonths,
    SixYearsFromZeroToThreeMonths,
    TenYearsFromEightToElevenMonths,
    TenYearsFromFourToSevenMonths,
    TenYearsFromZeroToThreeMonths,
    ThirteenYearsFromEightToElevenMonths,
    ThirteenYearsFromFourToSevenMonths,
    ThirteenYearsFromZeroToThreeMonths,
    TwelveYearsFromEightToElevenMonths,
    TwelveYearsFromFourToSevenMonths,
    TwelveYearsFromZeroToThreeMonths,
} from '@entities';
import { IPeriodDispatchingService, PeriodType } from '@ports';
import { IPeriodDto } from '@types';
export const usePeriodDispatchingService = (): IPeriodDispatchingService => {
    return {
        dispatch: (period: IPeriodDto | null): Period | null => {
            if (!period) {
                return null;
            }
            switch (period.type) {
                case PeriodType.FIVE_ZERO_THREE:
                    return new FiveYearsFromZeroToThreeMonths();
                case PeriodType.FIVE_FOUR_SEVEN:
                    return new FiveYearsFromFourToSevenMonths();
                case PeriodType.FIVE_EIGHT_ELEVEN:
                    return new FiveYearsFromEightToElevenMonths();

                case PeriodType.SIX_ZERO_THREE:
                    return new SixYearsFromZeroToThreeMonths();
                case PeriodType.SIX_FOUR_SEVEN:
                    return new SixYearsFromFourToSevenMonths();
                case PeriodType.SIX_EIGHT_ELEVEN:
                    return new SixYearsFromEightToElevenMonths();

                case PeriodType.SEVEN_ZERO_THREE:
                    return new SevenYearsFromZeroToThreeMonths();
                case PeriodType.SEVEN_FOUR_SEVEN:
                    return new SevenYearsFromFourToSevenMonths();
                case PeriodType.SEVEN_EIGHT_ELEVEN:
                    return new SevenYearsFromEightToElevenMonths();

                case PeriodType.EIGHT_ZERO_THREE:
                    return new EightYearsFromZeroToThreeMonths();
                case PeriodType.EIGHT_FOUR_SEVEN:
                    return new EightYearsFromFourToSevenMonths();
                case PeriodType.EIGHT_EIGHT_ELEVEN:
                    return new EightYearsFromEightToElevenMonths();

                case PeriodType.NINE_ZERO_THREE:
                    return new NineYearsFromZeroToThreeMonths();
                case PeriodType.NINE_FOUR_SEVEN:
                    return new NineYearsFromFourToSevenMonths();
                case PeriodType.NINE_EIGHT_ELEVEN:
                    return new NineYearsFromEightToElevenMonths();

                case PeriodType.TEN_ZERO_THREE:
                    return new TenYearsFromZeroToThreeMonths();
                case PeriodType.TEN_FOUR_SEVEN:
                    return new TenYearsFromFourToSevenMonths();
                case PeriodType.TEN_EIGHT_ELEVEN:
                    return new TenYearsFromEightToElevenMonths();

                case PeriodType.ELEVEN_ZERO_THREE:
                    return new ElevenYearsFromZeroToThreeMonths();
                case PeriodType.ELEVEN_FOUR_SEVEN:
                    return new ElevenYearsFromFourToSevenMonths();
                case PeriodType.ELEVEN_EIGHT_ELEVEN:
                    return new ElevenYearsFromEightToElevenMonths();

                case PeriodType.TWELVE_ZERO_THREE:
                    return new TwelveYearsFromZeroToThreeMonths();
                case PeriodType.TWELVE_FOUR_SEVEN:
                    return new TwelveYearsFromFourToSevenMonths();
                case PeriodType.TWELVE_EIGHT_ELEVEN:
                    return new TwelveYearsFromEightToElevenMonths();

                case PeriodType.THIRTEEN_ZERO_THREE:
                    return new ThirteenYearsFromZeroToThreeMonths();
                case PeriodType.THIRTEEN_FOUR_SEVEN:
                    return new ThirteenYearsFromFourToSevenMonths();
                case PeriodType.THIRTEEN_EIGHT_ELEVEN:
                    return new ThirteenYearsFromEightToElevenMonths();

                case PeriodType.FOURTEEN_ZERO_THREE:
                    return new FourteenYearsFromZeroToThreeMonths();
                case PeriodType.FOURTEEN_FOUR_SEVEN:
                    return new FourteenYearsFromFourToSevenMonths();
                case PeriodType.FOURTEEN_EIGHT_ELEVEN:
                    return new FourteenYearsFromEightToElevenMonths();

                case PeriodType.FIFTEEN_ZERO_THREE:
                    return new FifteenYearsFromZeroToThreeMonths();
                case PeriodType.FIFTEEN_FOUR_SEVEN:
                    return new FifteenYearsFromFourToSevenMonths();
                case PeriodType.FIFTEEN_EIGHT_ELEVEN:
                    return new FifteenYearsFromEightToElevenMonths();

                default:
                    return null;
            }
        },
    };
};
