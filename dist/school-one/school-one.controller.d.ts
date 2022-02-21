import { CreateStudentDto } from './dtos/create-student.dto';
import { UpdateStudentDto } from './dtos/update-student.dto';
import { SchoolOneService } from './school-one.service';
export declare class SchoolOneController {
    private schoolOneService;
    constructor(schoolOneService: SchoolOneService);
    createStudent(body: CreateStudentDto): void;
    findStudent(rollNo: string): Promise<import("./school-one.entity").SchoolOne>;
    findAllStudents(studentName: string): Promise<import("./school-one.entity").SchoolOne[]>;
    removeStudent(rollNo: string): Promise<import("./school-one.entity").SchoolOne>;
    updateStudent(rollNo: string, body: UpdateStudentDto): Promise<import("./school-one.entity").SchoolOne>;
}
