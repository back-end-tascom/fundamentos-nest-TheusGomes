// src/student/student.service.ts
import { Injectable } from '@nestjs/common';
import { Student } from '../student.entity';

@Injectable()
export class StudentService {
  private students: Student[] = [];

  // Método para adicionar um estudante
  addStudent(name: string, age: number, course: string): Student {
    const newStudent = new Student(name, age, course);
    this.students.push(newStudent);
    return newStudent;
  }

  // Método para retornar todos os estudantes
  getStudents(): Student[] {
    return this.students;
  }

  // Método para retornar um estudante pelo ID
  getStudentById(id: string): Student | undefined {
    return this.students.find(student => student.id === id);
  }

  // Método para atualizar as informações de um estudante
  updateStudent(id: string, data: Partial<Student>): Student | null {
    const studentIndex = this.students.findIndex(student => student.id === id);
    if (studentIndex === -1) return null;

    const updatedStudent = { ...this.students[studentIndex], ...data };
    this.students[studentIndex] = updatedStudent;
    return updatedStudent;
  }

  // Método para remover um estudante pelo ID
  deleteStudent(id: string): boolean {
    const studentIndex = this.students.findIndex(student => student.id === id);
    if (studentIndex === -1) return false;

    this.students.splice(studentIndex, 1);
    return true;
  }
}
