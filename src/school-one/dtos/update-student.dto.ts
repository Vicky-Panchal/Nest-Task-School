import { IsEmail, IsString, IsOptional, IsNumber } from "class-validator";

export class UpdateStudentDto {
    @IsString()
    @IsOptional()
    studentName: string;

    @IsNumber()
    @IsOptional()
    aadharID: number;

    @IsEmail()
    @IsOptional()
    email: string;
}