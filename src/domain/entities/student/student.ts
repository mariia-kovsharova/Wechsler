import { StudentDate, StudentGender, StudentName } from '../../types';

export class Student {
    private _name: StudentName | null;

    private _birthDate: StudentDate | null;

    private _gender: StudentGender;

    constructor(
        name: string | null = null,
        birthDate: Date | null = null,
        gender: StudentGender = 'male',
    ) {
        this._name = name as StudentName;
        this._birthDate = birthDate as StudentDate;
        this._gender = gender;
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

    get gender(): StudentGender {
        return this._gender;
    }

    set gender(value: StudentGender) {
        this._gender = value;
    }

    public isMale(): boolean {
        return this._gender === 'male';
    }
}
