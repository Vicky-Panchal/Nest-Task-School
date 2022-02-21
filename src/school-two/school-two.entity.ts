import { Entity, Column, PrimaryGeneratedColumn, Unique} from 'typeorm';

@Entity()
export class SchoolTwo {
    @PrimaryGeneratedColumn()
    rollNo: number;

    @Column({ unique: true })
    aadharID: number;

    @Column()
    studentName: string;

    @Column()
    email: string;

}

//{ unique: true }