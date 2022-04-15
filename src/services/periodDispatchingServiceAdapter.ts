import {
    FiveYearsFromZeroToThreeMonths,
    FiveYearsFromFourToSevenMonths,
    FiveYearsFromEightToElevenMonths,
    SixYearsFromZeroToThreeMonths,
    SixYearsFromFourToSevenMonths,
    SixYearsFromEightToElevenMonths,
    SevenYearsFromZeroToThreeMonths,
    SevenYearsFromFourToSevenMonths,
    SevenYearsFromEightToElevenMonths,
    EightYearsFromZeroToThreeMonths,
    EightYearsFromFourToSevenMonths,
    EightYearsFromEightToElevenMonths,
    NineYearsFromZeroToThreeMonths,
    NineYearsFromFourToSevenMonths,
    NineYearsFromEightToElevenMonths,
    Period,
} from '../domain/entities/period';
import { IPeriodDispatchingService, PeriodType } from '../domain/ports';
import { IPeriodDto } from '../domain/types';

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

                default:
                    return null;
            }
        },
    };
};