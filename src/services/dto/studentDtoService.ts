import { Student } from '@entities';
import { IDtoService } from '@ports';
import { IStudentDto } from '@types';
import { useDateTransformService } from '../dateTransformAdapter';

export const useStudentDtoService = (): IDtoService<Student, IStudentDto> => {
    const dateTransformService = useDateTransformService();

    return {
        toDto(from: Student): IStudentDto {
            return {
                name: from.name as string,
                birthDate: dateTransformService.toLocaleString(from.birthDate as Date),
                gender: from.gender,
            };
        },

        toEntity(from: IStudentDto): Student {
            const birthDate = from.birthDate ? dateTransformService.fromLocaleString(from.birthDate) : null;
            return new Student(from.name, birthDate, from.gender);
        },
    };
};
