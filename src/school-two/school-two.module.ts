import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolTwoController } from './school-two.controller';
import { SchoolTwoService } from './school-two.service';
import { SchoolTwo } from './school-two.entity';
import { SchoolOne } from 'src/school-one/school-one.entity';
import { SchoolOneService } from 'src/school-one/school-one.service';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolTwo]), TypeOrmModule.forFeature([SchoolOne])],
  controllers: [SchoolTwoController],
  providers: [SchoolTwoService]
})
export class SchoolTwoModule {}
