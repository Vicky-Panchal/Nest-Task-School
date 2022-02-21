import { CreateStudentDto } from './dtos/create-student.dto';
import { UpdateStudentDto } from './dtos/update-student.dto';
import { SchoolTwoService } from './school-two.service';
export declare class SchoolTwoController {
    private schoolTwoService;
    constructor(schoolTwoService: SchoolTwoService);
    createStudent(body: CreateStudentDto): void;
    findStudent(rollNo: string): Promise<import("./school-two.entity").SchoolTwo>;
    findAllStudents(studentName: string): Promise<import("./school-two.entity").SchoolTwo[]>;
    removeStudent(rollNo: string): Promise<import("./school-two.entity").SchoolTwo>;
    updateStudent(rollNo: string, body: UpdateStudentDto): Promise<import("./school-two.entity").SchoolTwo>;
}
