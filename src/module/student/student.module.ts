// src/student/student.module.ts
import { Module } from '@nestjs/common';
import { StudentService } from './student.service';

@Module({
  providers: [StudentService],  // Registra o serviço no módulo
})
export class StudentModule {}
