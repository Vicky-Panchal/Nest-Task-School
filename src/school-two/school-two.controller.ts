import { Body, Controller, Delete, NotAcceptableException, Post, Get, Patch, Param, Query, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dtos/create-student.dto';
import { UpdateStudentDto } from './dtos/update-student.dto';
import { SchoolTwoService } from './school-two.service';


@Controller('school-two')
export class SchoolTwoController {
    constructor(private schoolTwoService: SchoolTwoService) {}

    @Post('/addStudent')
    createStudent(@Body() body: CreateStudentDto) {

        this.schoolTwoService.create(body.studentName, body.aadharID, body.email);
    }

    @Get('/:rollNo')
    async findStudent(@Param('rollNo') rollNo: string) {
        const student = await this.schoolTwoService.findOne(parseInt(rollNo));
        if(!student) {
            throw new NotFoundException('Student not found');
        }

        return student;
    }

    @Get()
    findAllStudents(@Query('studentName') studentName: string) {
        return this.schoolTwoService.find(studentName);
    }

    @Delete('/:rollNo')
    removeStudent(@Param('rollNo') rollNo: string) {
        return this.schoolTwoService.remove(parseInt(rollNo));
    }

    @Patch('/:rollNo')
    updateStudent(@Param('rollNo') rollNo: string, @Body() body: UpdateStudentDto) {
        return this.schoolTwoService.update(parseInt(rollNo), body);
    }
}