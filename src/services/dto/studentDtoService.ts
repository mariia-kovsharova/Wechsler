import { Student } from '../../domain/entities/student/student';
import { IDtoService } from '../../domain/ports';
import { IStudent, IStudentDto } from '../../domain/types';
import { useDateTransformService } from '../dateTransformAdapter';

export const useStudentDtoService = (): IDtoService<IStudent, IStudentDto> => {
    const dateTransformService = useDateTransformService();

    return {
        toDto(from: IStudent): IStudentDto {
            return {
                name: from.name as string,
                birthDate: dateTransformService.toLocaleString(from.birthDate as Date),
                gender: from.gender,
            };
        },

        toEntity(from: IStudentDto): IStudent {
            const birthDate = from.birthDate ? dateTransformService.fromLocaleString(from.birthDate) : null;
            return new Student(from.name, birthDate, from.gender);
        },
    };
};

// export class StudentDtoService implements IDtoService<IStudent, IStudentDto> {
//     toDto(from: IStudent): IStudentDto {
//         return {
//             name: from.name as string,
//             birthDate: from.birthDate as Date,
//             gender: from.gender,
//         };
//     }

//     toEntity(from: IStudentDto): IStudent {
//         return new Student(from.name, from.birthDate, from.gender);
//     }
// }