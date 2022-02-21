import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchoolOneModule } from './school-one/school-one.module';
import { SchoolTwoModule } from './school-two/school-two.module';
import { SchoolOne } from './school-one/school-one.entity';
import { SchoolTwo } from './school-two/school-two.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [SchoolOne, SchoolTwo],
    synchronize: true
  }), 
  SchoolOneModule, 
  SchoolTwoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
