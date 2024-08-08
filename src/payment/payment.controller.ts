import { Controller, Get } from '@nestjs/common';
import { CourseService } from 'src/course/course.service';
import { StudentService } from 'src/student/student.service';

@Controller('payment')
export class PaymentController {
  constructor(
    private readonly courseService: CourseService,
    private readonly studentService: StudentService,
  ) {}

  @Get()
  findAll() {
    return this.courseService.findAll() + 'from paymentcontroller';
  }
}
