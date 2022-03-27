import { ISubtestDto } from '../../domain/types';

export class SubtestDto implements ISubtestDto {
    constructor(public readonly name: string, public readonly rawPoints: number) { }
}
