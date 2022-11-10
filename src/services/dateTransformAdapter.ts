import { IDateTransformService } from '@ports';
import dayjs, { Dayjs } from 'dayjs';

const DATE_FORMAT = 'dd.MM.yyyy';

export const dateTransformService: IDateTransformService = {
    toLocaleString: (date: Date, format: string = DATE_FORMAT): string =>
        dayjs(date).format(format),
    fromLocaleString: (from: string, format: string = DATE_FORMAT): Date =>
        dayjs(from, format).toDate(),
    toDate: (from: Dayjs): Date => {
        return from.toDate();
    },
    isSameDate: (first: Date, second: Date): boolean => {
        return new Dayjs(first).isSame(second);
    },
    getDiffInMonths: (first: Date, second: Date): number => {
        return new Dayjs(first).diff(second, 'month');
    },
};

export const useDateTransformService = (): IDateTransformService => {
    return dateTransformService;
};
