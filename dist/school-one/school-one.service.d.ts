import { Repository } from 'typeorm';
import { SchoolOne } from './school-one.entity';
import { SchoolTwo } from 'src/school-two/school-two.entity';
export declare class SchoolOneService {
    private repo;
    private repo2;
    constructor(repo: Repository<SchoolOne>, repo2: Repository<SchoolTwo>);
    create(studentName: string, aadharID: number, email: string): Promise<SchoolOne>;
    findOne(aadharID: number): Promise<SchoolOne>;
    find(studentName: string): Promise<SchoolOne[]>;
    update(aadharID: number, attrs: Partial<SchoolOne>): Promise<SchoolOne>;
    remove(aadharID: number): Promise<SchoolOne>;
}
