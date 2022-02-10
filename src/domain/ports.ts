import { Period } from './entities/period';
import { Student } from './entities/student/student';
import { TestConclusion, TestDate } from './types';

export interface IStudentStorageService {
    student: Student;
    updateStudent: (student: Student) => void;
}

export interface IMetadataStorageService {
    date: TestDate;
    conclusion: TestConclusion;
    updateDate: (date: TestDate | null) => void;
    updateConclusion: (conclusion: TestConclusion) => void;
}

export interface IPeriodStorageService {
    period: Period | null;
    updatePeriod: (period: Period | null) => void;
}
