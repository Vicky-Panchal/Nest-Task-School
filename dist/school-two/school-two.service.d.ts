import { Repository } from 'typeorm';
import { SchoolTwo } from './school-two.entity';
import { SchoolOne } from 'src/school-one/school-one.entity';
export declare class SchoolTwoService {
    private repo;
    private repo2;
    constructor(repo: Repository<SchoolTwo>, repo2: Repository<SchoolOne>);
    create(studentName: string, aadharID: number, email: string): Promise<SchoolTwo>;
    findOne(aadharID: number): Promise<SchoolTwo>;
    find(studentName: string): Promise<SchoolTwo[]>;
    update(aadharID: number, attrs: Partial<SchoolTwo>): Promise<SchoolTwo>;
    remove(aadharID: number): Promise<SchoolTwo>;
}
