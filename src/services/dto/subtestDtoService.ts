import { IDtoService } from '@ports';
import { ISubtest, ISubtestDto, SubtestName } from '@types';

export const useSubtestDtoService = (): IDtoService<ISubtest, ISubtestDto> => {
    return {
        toDto(from: ISubtest): ISubtestDto {
            return {
                name: from.name,
                rawPoints: from.rawPoints,
                scalePoints: from.scalePoints,
                normalPoints: from.normalPoints,
                isInvalid: from.isInvalid,
                isEmpty: from.isEmpty,
            };
        },

        toEntity(from: ISubtestDto): ISubtest {
            return {
                name: from.name as SubtestName,
                rawPoints: from.rawPoints,
                scalePoints: from.scalePoints,
                normalPoints: from.normalPoints,
                isInvalid: from.isInvalid,
                isEmpty: from.isEmpty,
            };
        },
    };
};