import { cloneDeep } from 'lodash-es';
import { coerceToNumber, isNil } from '../../lib/utils';
import { TestName } from '../entities/period';
import { IPeriodStorageService } from '../ports';

export interface IUpdatePeriodUseCaseDependencies {
    periodStorage: IPeriodStorageService;
}

/**
 * Это use case - описывает действия, которые необходимо реализовать
 * для того, чтобы обновить данные по дате 
 * 
 */

export const updatePeriodSubtestUseCase = (
    name: TestName,
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