import { IDtoService } from '@ports';
import { IDateDto, TestDate } from '@types';
import { useDateTransformService } from '../dateTransformAdapter';

export const useDateDtoService = (): IDtoService<TestDate, IDateDto> => {
    const dateTransformService = useDateTransformService();

    return {
        toDto(from: TestDate): IDateDto {
            return dateTransformService.toLocaleString(from as Date);
        },
        toEntity(from: IDateDto): TestDate {
            return dateTransformService.fromLocaleString(from) as TestDate;
        },
    };
};

// !!! an example of class service !!!

// export class DateDtoService implements IDtoService<TestDate, IDateDto> {
//     constructor(private readonly dateTransformService: IDateTransformService) { }

//     toDto(from: TestDate): IDateDto {
//         return { date: this.dateTransformService.toLocaleString(from as Date) };
//     }

//     toEntity(from: IDateDto): TestDate {
//         return this.dateTransformService.fromLocaleString(from.date) as TestDate;
//     }
// }