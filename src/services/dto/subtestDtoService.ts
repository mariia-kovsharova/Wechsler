import { IDtoService } from '../../domain/ports';
import { ISubtest, ISubtestDto } from '../../domain/types';

export const useSubtestDtoService = (): IDtoService<ISubtest, ISubtestDto> => {
    return {
        toDto(from: ISubtest): ISubtestDto {
            return {
                name: from.name,
                rawPoints: from.rawPoints,
            };
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        toEntity(from: ISubtestDto): ISubtest {
            return null as unknown as ISubtest;
        },
    };
};