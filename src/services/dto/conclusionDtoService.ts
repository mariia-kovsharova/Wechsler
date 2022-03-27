import { IDtoService } from '../../domain/ports';
import { IConclusionDto, TestConclusion } from '../../domain/types';

export const useConclusionDtoService = (): IDtoService<TestConclusion, IConclusionDto> => {
    return {
        toDto(from: TestConclusion): IConclusionDto {
            return { conclusion: from };
        },

        toEntity(from: IConclusionDto): TestConclusion {
            return from.conclusion as TestConclusion;
        },
    };
};
