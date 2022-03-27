import { IDateDto, StringifiedDateType } from '../../domain/types';

export class DateDto implements IDateDto {
    constructor(public readonly date: StringifiedDateType) { }
}