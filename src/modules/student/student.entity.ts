// src/student/entities/student.entity.ts
export class Student {
    id: string;
    name: string;
    age: number;
    course: string;
  
    constructor(name: string, age: number, course: string) {
      this.id = Math.random().toString(36).substring(2, 15); // Gerando ID aleatório (simples para o exemplo)
      this.name = name;
      this.age = age;
      this.course = course;
    }
  }
  