import { IDateTransformService } from '@ports';
import { DateTime } from 'luxon';

const DATE_FORMAT = 'dd.MM.yyyy';

export const dateTransformService: IDateTransformService = {
    toLocaleString: (date: Date, dateFormat: string = DATE_FORMAT): string =>
        DateTime.fromJSDate(date).toFormat(dateFormat),
    fromLocaleString: (from: string, dateFormat: string = DATE_FORMAT): Date =>
        DateTime.fromFormat(from, dateFormat).toJSDate(),
    toDate: (from: DateTime | null): Date | null => {
        return from ? from.toJSDate() : null;
    },
    isSameDate: (first: Date, second: Date): boolean => {
        const duration = DateTime.fromJSDate(first).diff(
            DateTime.fromJSDate(second),
            'days',
        );

        return duration.as('days') === 0;
    },
    getDiffInMonths: (first: Date, second: Date): number => {
        const duration = DateTime.fromJSDate(first).diff(
            DateTime.fromJSDate(second),
            'months',
        );
        return duration.as('months');
    },
};

export const useDateTransformService = (): IDateTransformService => {
    return dateTransformService;
};
