import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alumnos } from './alumnos';



@NgModule({
  declarations: [
    Alumnos
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Alumnos
  ]
})
export class AlumnosModule { }
