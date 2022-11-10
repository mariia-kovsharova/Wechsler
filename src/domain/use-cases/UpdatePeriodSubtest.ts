import { coerceToNumber, isNil } from '../../lib/utils';
import { IPeriodStorageService } from '../ports';
import { IPeriodSubtests } from '../types';

export interface IUpdatePeriodUseCaseDependencies {
    periodStorage: IPeriodStorageService;
}

export const updatePeriodSubtestUseCase = (
    name: keyof IPeriodSubtests,
    value: number | string | null,
    deps: IUpdatePeriodUseCaseDependencies,
): void => {
    const { period, updatePeriod } = deps.periodStorage;

    if (isNil(period)) {
        return;
    }

    period.updateTestValue(name, coerceToNumber(value));
    updatePeriod(period);
};
