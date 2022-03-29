import { IDtoService } from '../../domain/ports';
import { IConclusionDto, TestConclusion } from '../../domain/types';

export const useConclusionDtoService = (): IDtoService<TestConclusion, IConclusionDto> => {
    return {
        toDto(from: TestConclusion): IConclusionDto {
            return from;
        },

        toEntity(from: IConclusionDto): TestConclusion {
            return from as TestConclusion;
        },
    };
};

// export class ConclustionDtoService implements IDtoService<TestConclusion, IConclusionDto> {
//     toDto(from: TestConclusion): IConclusionDto {
//         return { conclusion: from };
//     }

//     toEntity(from: IConclusionDto): TestConclusion {
//         return from.conclusion as TestConclusion;
//     }
// }