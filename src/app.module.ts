import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { PaymentController } from './payment/payment.controller';
import { CustomServieService } from './custom-servie/custom-servie.service';
import { StudentService } from './student/student.service';
import { CourseService } from './course/course.service';
import { Logger } from './middlewares/functionalMiddlware';
import { StudentController } from './student/student.controller';

@Module({
  imports: [StudentModule, CourseModule],
  controllers: [AppController, PaymentController],
  providers: [AppService, CustomServieService, StudentService, CourseService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Logger).exclude('student');
  }
}
