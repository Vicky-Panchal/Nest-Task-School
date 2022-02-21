import { IsEmail, IsString, IsNumber} from 'class-validator';

export class CreateStudentDto {
    @IsString()
    studentName: string;

    @IsNumber()
    aadharID: number;

    @IsEmail()
    email: string;
} 