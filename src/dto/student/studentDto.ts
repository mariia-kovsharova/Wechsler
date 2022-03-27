import { IStudentDto, StudentGender } from '../../domain/types';

export class StudentDto implements IStudentDto {
    constructor(
        public readonly name: string,
        public readonly birthDate: Date,
        public readonly gender: StudentGender,
    ) { }
}