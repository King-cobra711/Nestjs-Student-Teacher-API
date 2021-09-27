// These routes were tested using Postman. The input information for the body requests are provided above the routes.

import {
  Controller,
  Get,
  Put,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  FindTeachersDto,
  UpdateTeachersStudentsDto,
  UpdatStudentTeacher,
} from './dto/teacher.dto';
import { StudentResponseDto } from '../student/dto/student.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  // (GET) http://localhost:3001/teachers
  @Get()
  getTeachers(): FindTeachersDto[] {
    return this.teacherService.getTeachers();
  }

  //  (GET) http://localhost:3001/teachers/9c9324e8-b656-11eb-8529-0242ac130003
  @Get('/:teacherid')
  getTeacherById(
    @Param('teacherid', new ParseUUIDPipe()) teacherid: string,
  ): FindTeachersDto {
    return this.teacherService.getTeacherById(teacherid);
  }

  // these last 2 routes could be a seperate controller in the teacher folder using a starting url "/:teacherid/students"

  // (GET) http://localhost:3001/teachers/9c9324e8-b656-11eb-8529-0242ac130003/students
  @Get('/:teacherid/students')
  getStudentsByTeacherId(
    @Param('teacherid', new ParseUUIDPipe()) teacherid: string,
  ): UpdateTeachersStudentsDto[] {
    return this.teacherService.getStudentsByTeacherId(teacherid);
  }

  // (PUT) http://localhost:3001/teachers/1c2505d8-b656-11eb-8529-0242ac130003

  //   Body: {
  //     "teacher": "1c250754-b656-11eb-8529-0242ac130003"
  // }
  @Put('/:studentid')
  updateTeachersStudents(
    @Param('studentid', new ParseUUIDPipe()) studentId: string,
    @Body() body: UpdatStudentTeacher,
  ): StudentResponseDto {
    return this.teacherService.updateTeachersStudents(studentId, body);
  }
}
