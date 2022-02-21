import { IsEmail, IsNumber, IsString} from 'class-validator';

export class CreateStudentDto {
    @IsString()
    studentName: string;

    @IsNumber()
    aadharID: number;

    @IsEmail()
    email: string;
} 