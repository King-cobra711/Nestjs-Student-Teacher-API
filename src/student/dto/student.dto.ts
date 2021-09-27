// Data Transfer Objects
// Some of these are the same data types  however in the future they may change and this is why they have not been condensed into one dto.

export class FindStudentDto {
  id: string;
  name: string;
  teacher: string;
}
export class StudentResponseDto {
  id: string;
  name: string;
  teacher: string;
}

export class CreateStudentDto {
  name: string;
  teacher: string;
}
export class UpdataStudentDto {
  name: string;
  teacher: string;
}
