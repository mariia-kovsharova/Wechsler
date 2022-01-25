import { Period } from './entities/period';
import { Student } from './entities/student/student';
import { TestDate } from './types';

export interface IStudentStorageService {
    student: Student;
    updateStudent: (student: Student) => void;
}

export interface IMetadataStorageService {
    date: TestDate;
    updateDate: (date: TestDate | null) => void;
}

export interface IPeriodStorageService {
    period: Period | null;
    updatePeriod: (period: Period | null) => void;
}
