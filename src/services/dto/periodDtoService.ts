import { IDtoService } from '../../domain/ports';
import { IDateDto, IPeriod, IPeriodDto, TestDate } from '../../domain/types';

export const usePeriodDtoService = (): IDtoService<IPeriod, IPeriodDto> => {
    return {
        toDto(from: TestDate): IDateDto {
            return { date: dateTransformService.toLocaleString(from as Date) };
        },
        toEntity(from: IDateDto): TestDate {
            return dateTransformService.fromLocaleString(from.date) as TestDate;
        },
    };
};

export class DateDtoService implements IDtoService<TestDate, IDateDto> {
    constructor(private readonly dateTransformService: IDateTransformService) { }

    toDto(from: TestDate): IDateDto {
        return { date: this.dateTransformService.toLocaleString(from as Date) };
    }

    toEntity(from: IDateDto): TestDate {
        return this.dateTransformService.fromLocaleString(from.date) as TestDate;
    }
}