import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alumnos } from './alumnos';
import { AlumnosForm } from './components/alumnos-form/alumnos-form';
import { AlumnosList } from './components/alumnos-list/alumnos-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared-module';
@NgModule({
  declarations: [
    Alumnos,
    AlumnosForm,
    AlumnosList
  ],
  imports: [
    CommonModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    Alumnos
  ]
})
export class AlumnosModule { }
