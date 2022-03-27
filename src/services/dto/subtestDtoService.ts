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

        toEntity(from: ISubtestDto): ISubtest {
            // return new Student(from.name, from.birthDate, from.gender);
        },
    };
};