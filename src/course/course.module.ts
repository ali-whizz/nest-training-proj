import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { StudentService } from 'src/student/student.service';

@Module({
  controllers: [CourseController],
  providers: [CourseService, StudentService],
})
export class CourseModule {}
