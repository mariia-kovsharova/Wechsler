import { Student } from '../../domain/entities/student/student';
import { IDtoService } from '../../domain/ports';
import { IStudent, IStudentDto } from '../../domain/types';

export const useStudentDtoService = (): IDtoService<IStudent, IStudentDto> => {
    return {
        toDto(from: IStudent): IStudentDto {
            return {
                name: from.name as string,
                birthDate: from.birthDate as Date,
                gender: from.gender,
            };
        },

        toEntity(from: IStudentDto): IStudent {
            return new Student(from.name, from.birthDate, from.gender);
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