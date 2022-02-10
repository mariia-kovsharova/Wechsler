import { cloneDeep } from 'lodash-es';
import { coerceToNumber, isNil } from '../../lib/utils';
import { IPeriodStorageService } from '../ports';
import { IPeriod } from '../types';

export interface IUpdatePeriodUseCaseDependencies {
    periodStorage: IPeriodStorageService;
}

export const updatePeriodSubtestUseCase = (
    name: keyof IPeriod,
    value: number | string | null,
    deps: IUpdatePeriodUseCaseDependencies,
): void => {
    const { period, updatePeriod } = deps.periodStorage;

    if (isNil(period)) {
        return;
    }

    const periodCopy = cloneDeep(period);
    periodCopy.updateTestValue(name, coerceToNumber(value));
    updatePeriod(periodCopy);
};