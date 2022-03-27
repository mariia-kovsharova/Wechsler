import { IDateTransformService } from '../domain/ports';
import { format, parse } from 'date-fns';

const DATE_FORMAT = 'dd.MM.yyyy';

export const useDateTransformService = (): IDateTransformService => {
    return {
        toLocaleString: (date: Date): string => format(date, DATE_FORMAT),
        fromLocaleString: (from: string): Date => parse(from, DATE_FORMAT, new Date()),
    };
};