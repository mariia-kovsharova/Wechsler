import { IPeriodStorageService } from '@ports';
import { IPeriodSubtests } from '@types';
import { coerceToNumber, deepCopy, isNil } from '../../lib/utils';

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

    const updatedPeriod = deepCopy(period);
    updatedPeriod.updateTestValue(name, coerceToNumber(value));

    updatePeriod(updatedPeriod);
};
