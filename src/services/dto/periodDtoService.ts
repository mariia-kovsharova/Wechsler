import { IDtoService, PeriodType } from '../../domain/ports';
import { IPeriod, IPeriodDto } from '../../domain/types';
import { useSubtestDtoService } from './subtestDtoService';

export const usePeriodDtoService = (): IDtoService<IPeriod, IPeriodDto> => {
    const subtestDtoService = useSubtestDtoService();

    const typeMapper = (type: string): PeriodType => {
        switch (type) {
            case 'five-years-from-zero-to-three-months':
                return PeriodType.FIVE_ZERO_THREE;
            default:
                throw Error(`Unknown type for mapping: "${type}"`);
        }
    };

    return {
        toDto(from: IPeriod): IPeriodDto {
            return {
                type: from.type as string,
                verbalSubtests: from.verbalSubtests.map(x => subtestDtoService.toDto(x)),
                inverbalSubtests: from.inverbalSubtests.map(x => subtestDtoService.toDto(x)),
            };
        },

        toEntity(from: IPeriodDto): IPeriod {
            return {
                type: typeMapper(from.type),
                verbalSubtests: [],
                inverbalSubtests: [],
            };
        },
    };
};
