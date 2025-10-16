import { Component } from '@angular/core';
import { Alumno } from './interface/alumnos';
@Component({
  selector: 'app-alumnos',
  standalone: false,
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.scss'
})
export class Alumnos {
  AlumnosList: Alumno[] = [
    { id: 1, nombre: 'John', apellido: 'Doe', direccion: '123 Main St', telefono: '555-1234', email: 'john@example.com' },
    { id: 2, nombre: 'Jane', apellido: 'Smith', direccion: '456 Oak Ave', telefono: '555-5678', email: 'jane@example.com' },
    { id: 3, nombre: 'Jim', apellido: 'Brown', direccion: '789 Pine Rd', telefono: '555-8765', email: 'jim@example.com' },
    { id: 4, nombre: 'Sara', apellido: 'White', direccion: '321 Maple St', telefono: '555-4321', email: 'sara@example.com' },
    { id: 5, nombre: 'Tom', apellido: 'Black', direccion: '654 Cedar Ave', telefono: '555-6789', email: 'tom@example.com' },
    { id: 6, nombre: 'Lucy', apellido: 'Green', direccion: '987 Birch Rd', telefono: '555-9876', email: 'lucy@example.com' },
    { id: 7, nombre: 'Mike', apellido: 'Blue', direccion: '147 Spruce St', telefono: '555-2468', email: 'mike@example.com' },
    { id: 8, nombre: 'Emma', apellido: 'Yellow', direccion: '258 Elm Ave', telefono: '555-1357', email: 'emma@example.com' },
    { id: 9, nombre: 'Chris', apellido: 'Purple', direccion: '369 Walnut Rd', telefono: '555-8642', email: 'chris@example.com' },
    { id: 10, nombre: 'Olivia', apellido: 'Orange', direccion: '159 Chestnut St', telefono: '555-9753', email: 'olivia@example.com' }
  ];
}
