// These routes were tested using Postman. The input information for the body requests are provided above the routes.

import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  CreateStudentDto,
  UpdataStudentDto,
  FindStudentDto,
  StudentResponseDto,
} from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // (GET) http://localhost:3001/students/
  @Get()
  getStudents(): FindStudentDto[] {
    return this.studentService.getStudents();
  }

  // (GET) http://localhost:3001/students/1c25025e-b656-11eb-8529-0242ac130003
  @Get('/:studentid')
  getStudentById(
    @Param('studentid', new ParseUUIDPipe()) studentId: string,
  ): FindStudentDto {
    return this.studentService.getStudentById(studentId);
  }

  // (POST) http://localhost:3001/students/

  // Body: {
  //   name: 'New Student';
  //   teacher: '1c250754-b656-11eb-8529-0242ac130003';
  // };
  @Post()
  createStudent(@Body() body: CreateStudentDto): FindStudentDto {
    return this.studentService.createStudent(body);
  }

  // (PUT) http://localhost:3001/students/1c2504f2-b656-11eb-8529-0242ac130003

  // Body: {
  //   name: 'Update Student';
  //   teacher: '1c250754-b656-11eb-8529-0242ac130003';
  // };
  @Put('/:studentid')
  updateStudent(
    @Param('studentid', new ParseUUIDPipe()) studentId: string,
    @Body() body: UpdataStudentDto,
  ): StudentResponseDto {
    return this.studentService.updateStudent(body, studentId);
  }
}
