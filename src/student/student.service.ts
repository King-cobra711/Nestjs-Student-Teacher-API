import { Injectable } from '@nestjs/common';
import { students } from '../db';
import {
  FindStudentDto,
  StudentResponseDto,
  CreateStudentDto,
  UpdataStudentDto,
} from './dto/student.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  private students = students;
  getStudents(): FindStudentDto[] {
    return this.students;
  }

  getStudentById(studentId: string): FindStudentDto {
    return this.students.find((students) => {
      return students.id === studentId;
    });
  }

  createStudent(payload: CreateStudentDto): StudentResponseDto {
    const newStudent = {
      id: uuid(),
      ...payload,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(payload: UpdataStudentDto, studentId: string) {
    let updatedStudent: StudentResponseDto;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          id: studentId,
          ...payload,
        };
      } else return student;
    });
    this.students = updatedStudentList;

    return updatedStudent;
  }
}
