import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolOneController } from './school-one.controller';
import { SchoolOneService } from './school-one.service';
import { SchoolOne } from './school-one.entity';
import { SchoolTwo } from 'src/school-two/school-two.entity';
import { SchoolTwoService } from 'src/school-two/school-two.service';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolOne]), TypeOrmModule.forFeature([SchoolTwo])],
  controllers: [SchoolOneController],
  providers: [SchoolOneService]
})
export class SchoolOneModule {}
