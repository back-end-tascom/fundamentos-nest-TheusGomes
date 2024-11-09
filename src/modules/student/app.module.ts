// src/student/student.module.ts
import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { StudentModule } from './student.module';

@Module({
  imports: [StudentModule],
  controllers: [StudentController],  // Adiciona o controlador ao módulo
  providers: [StudentService],
})
export class appModule {}
