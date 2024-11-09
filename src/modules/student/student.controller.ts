// src/student/student.controller.ts
import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';


@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // Endpoint para adicionar um novo estudante
  @Post()
  createStudent(@Body() body: { name: string, age: number, course: string }): Student {
    return this.studentService.addStudent(body.name, body.age, body.course);
  }

  // Endpoint para obter todos os estudantes
  @Get()
  getAllStudents(): Student[] {
    return this.studentService.getStudents();
  }

  // Endpoint para obter um estudante pelo ID
  @Get(':id')
  getStudentById(@Param('id') id: string): Student | undefined {
    return this.studentService.getStudentById(id);
  }

  // Endpoint para atualizar um estudante
  @Put(':id')
  updateStudent(@Param('id') id: string, @Body() body: Partial<Student>): Student | null {
    return this.studentService.updateStudent(id, body);
  }

  // Endpoint para deletar um estudante
  @Delete(':id')
  deleteStudent(@Param('id') id: string): boolean {
    return this.studentService.deleteStudent(id);
  }
}
