import { IConclusionDto } from '../../domain/types';

export class ConclusionDto implements IConclusionDto {
    constructor(public readonly conclusion: string) { }
}