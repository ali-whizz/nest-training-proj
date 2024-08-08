import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { LoggerMiddleware } from 'src/middlewares/classBasedMiddleware';
import { TestMiddleware } from 'src/middlewares/testMiddleware';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, TestMiddleware)
      .forRoutes(StudentController);
  }
}
