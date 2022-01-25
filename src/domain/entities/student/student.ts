import { Brand } from '../../types';

export type StudentName = Brand<string, 'student_name'>;
export type StudentDate = Brand<Date, 'student_date'>;
export type StudentGender = 'male' | 'female';

export class Student {
    private _name: StudentName | null;

    private _birthDate: StudentDate | null;

    private _gender: StudentGender | null;

    constructor() {
        this._name = null;
        this._birthDate = null;
        this._gender = 'male';
    }

    get name(): StudentName | null {
        return this._name;
    }

    set name(value: string | null) {
        this._name = value as StudentName;
    }

    get birthDate(): StudentDate | null {
        return this._birthDate;
    }

    set birthDate(value: Date | null) {
        this._birthDate = value as StudentDate;
    }

    get gender(): StudentGender | null {
        return this._gender;
    }

    set gender(value: StudentGender | null) {
        this._gender = value;
    }
}
