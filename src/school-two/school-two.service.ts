import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SchoolTwo } from './school-two.entity';
import { SchoolOneService } from 'src/school-one/school-one.service';
import { SchoolOne } from 'src/school-one/school-one.entity';

@Injectable()
export class SchoolTwoService {
    constructor(@InjectRepository(SchoolTwo) private repo: Repository<SchoolTwo>, @InjectRepository(SchoolOne) private repo2: Repository<SchoolOne>){}


    create(studentName: string, aadharID: number, email: string) {

        const student = this.repo.create({studentName, aadharID,email});
        
        if(aadharID == this.repo2.findOne(aadharID)[aadharID]) {
            throw new Error('You are already enrolled in some other school');
        }
        else {
            return this.repo.save(student);

        }

        
    }

    findOne(aadharID: number){
        return this.repo.findOne(aadharID);
    }

    find(studentName: string) {
        return this.repo.find({studentName});
    }

    async update(aadharID: number, attrs: Partial<SchoolTwo>) {
        const student = await this.findOne(aadharID);
        if (!student) {
            throw new NotFoundException('Student not found');
        }
        if(aadharID === this.repo2.findOne(aadharID)[aadharID]) {
            throw new Error('You are already enrolled in some other school');
        }
        else {
            Object.assign(student, attrs);
            return this.repo.save(student);
        }
        
    }

    async remove(aadharID: number) {
        const student = await this.findOne(aadharID);

        if(!student) {
            throw new NotFoundException("Student not found");
        }
        return this.repo.remove(student);
    }
}
