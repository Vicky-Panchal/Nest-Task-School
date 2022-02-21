import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SchoolOne } from './school-one.entity';
import { SchoolTwo } from 'src/school-two/school-two.entity';
import { SchoolTwoService } from 'src/school-two/school-two.service';

@Injectable()
export class SchoolOneService {
    constructor(@InjectRepository(SchoolOne) private repo: Repository<SchoolOne>, @InjectRepository(SchoolTwo) private repo2: Repository<SchoolTwo>){}

    create(studentName: string, aadharID: number, email: string) {

        const student = this.repo.create({studentName,aadharID,email});

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

    async update(aadharID: number, attrs: Partial<SchoolOne>) {
        const student = await this.findOne(aadharID);
        if (!student) {
            throw new NotFoundException('Student not found');
        }
        if(aadharID == this.repo2.findOne(aadharID)[aadharID]) {
            throw new Error('You are already enrolled in some other school');
        }
        Object.assign(student, attrs);
        return this.repo.save(student);
    }

    async remove(aadharID: number) {
        const student = await this.findOne(aadharID);

        if(!student) {
            throw new NotFoundException("Student not found");
        }
        return this.repo.remove(student);
    }

}
