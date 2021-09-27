import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ValidTeacherMiddleware } from 'src/common/middleware/validatTeacher.middleware';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teachers.controller';

@Module({
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidTeacherMiddleware).forRoutes({
      path: 'teachers/:teacherid',
      method: RequestMethod.GET,
    });
    consumer.apply(ValidTeacherMiddleware).forRoutes({
      path: 'teachers/:teacherid/students',
      method: RequestMethod.GET,
    });
  }
}
