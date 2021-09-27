import { Injectable } from '@nestjs/common';
import { teachers } from '../db';
import { students } from '../db';
import {
  FindTeachersDto,
  UpdateTeachersStudentsDto,
  UpdatStudentTeacher,
} from './dto/teacher.dto';
import { StudentResponseDto } from '../student/dto/student.dto';

@Injectable()
export class TeacherService {
  private teachers = teachers;
  private students = students;
  getTeachers(): FindTeachersDto[] {
    return this.teachers;
  }

  getTeacherById(teacherId: string): FindTeachersDto {
    return this.teachers.find((teacher) => {
      return teacher.id === teacherId;
    });
  }

  getStudentsByTeacherId(teacherid: string): UpdateTeachersStudentsDto[] {
    return this.students.filter((student) => {
      return student.teacher === teacherid;
    });
  }

  updateTeachersStudents(
    studentId: string,
    payload: UpdatStudentTeacher,
  ): StudentResponseDto {
    let updatedStudent: StudentResponseDto;
    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          ...student,
          teacher: payload.teacher,
        };
        return updatedStudent;
      } else return student;
    });
    this.students = updatedStudentList;
    return updatedStudent;
  }
}
