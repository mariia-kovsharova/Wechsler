import { SubtestName } from '../domain/entities/subtests';
import { updatePeriodSubtestUseCase } from '../domain/use-cases/UpdatePeriodSubtest';
import { usePeriodStorage } from '../repository/storageAdapter';

export function useUpdatePeriod() {
    const periodStorage = usePeriodStorage();

    return (name: SubtestName, value: string | number | null) =>
        // TODO: how to avoid casting?
        updatePeriodSubtestUseCase(name, value, { periodStorage });
}