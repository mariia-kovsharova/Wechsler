import { FiveYearsFromZeroToThreeMonths, Period } from '../domain/entities/period';
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
                default:
                    return null;
            }
        },
    };
};