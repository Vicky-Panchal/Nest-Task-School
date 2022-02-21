import { Body, Controller, Delete, NotAcceptableException, Post, Get, Patch, Param, Query, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dtos/create-student.dto';
import { UpdateStudentDto } from './dtos/update-student.dto';
import { SchoolOneService } from './school-one.service';


@Controller('school-one')
export class SchoolOneController {
    constructor(private schoolOneService: SchoolOneService) {}


    @Post('/addStudent')
    createStudent(@Body() body: CreateStudentDto) {

        this.schoolOneService.create(body.studentName, body.aadharID, body.email);
    }

    @Get('/:rollNo')
    async findStudent(@Param('rollNo') rollNo: string) {
        const student = await this.schoolOneService.findOne(parseInt(rollNo));
        if(!student) {
            throw new NotFoundException('Student not found');
        }

        return student;
    }

    @Get()
    findAllStudents(@Query('studentName') studentName: string) {
        return this.schoolOneService.find(studentName);
    }

    @Delete('/:rollNo')
    removeStudent(@Param('rollNo') rollNo: string) {
        return this.schoolOneService.remove(parseInt(rollNo));
    }

    @Patch('/:rollNo')
    updateStudent(@Param('rollNo') rollNo: string, @Body() body: UpdateStudentDto) {
        return this.schoolOneService.update(parseInt(rollNo), body);
    }
}
