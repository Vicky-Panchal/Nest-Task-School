import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class SchoolOne {
    @PrimaryGeneratedColumn()
    rollNo: number;

    @Column({ unique: true })
    aadharID: number;
    
    @Column()
    studentName: string;

    @Column()
    email: string;
}