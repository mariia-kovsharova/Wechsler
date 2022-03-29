import { IDtoService } from '../../domain/ports';
import { IPeriod, IPeriodDto } from '../../domain/types';
import { useSubtestDtoService } from './subtestDtoService';

export const usePeriodDtoService = (): IDtoService<IPeriod, IPeriodDto> => {
    const subtestDtoService = useSubtestDtoService();

    return {
        toDto(from: IPeriod): IPeriodDto {
            return {
                type: from.type,
                verbalSubtests: from.verbalSubtests.map(x => subtestDtoService.toDto(x)),
                inverbalSubtests: from.inverbalSubtests.map(x => subtestDtoService.toDto(x)),
            };
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        toEntity(from: IPeriodDto): IPeriod {
            return null as unknown as IPeriod;
        },
    };
};
