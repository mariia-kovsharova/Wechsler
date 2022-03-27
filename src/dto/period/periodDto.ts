import { IPeriodDto, ISubtestDto } from '../../domain/types';

export class PeriodDto implements IPeriodDto {
    constructor(
        public readonly type: string,
        public readonly verbalSubtests: ReadonlyArray<ISubtestDto>,
        public readonly inverbalSubtests: ReadonlyArray<ISubtestDto>,
    ) { }
}