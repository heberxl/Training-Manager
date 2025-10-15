import { Component } from '@angular/core';
import { User } from './Interface/User';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users {

  nombre: string = '';
  apellido: string = '';
  edad: number = 30;

  usersList: User[] = [
    { id: 1, nombre: 'Alice', apellido: 'Smith', email: 'alice@example.com' },
    { id: 2, nombre: 'Bob', apellido: 'Johnson', email: 'bob@example.com' },
    { id: 3, nombre: 'Charlie', apellido: 'Brown', email: 'charlie@example.com' },
    { id: 4, nombre: 'Diana', apellido: 'Prince', email: 'diana@example.com' },
    { id: 5, nombre: 'Edward', apellido: 'Norton', email: 'edward@example.com' },
    { id: 6, nombre: 'Fiona', apellido: 'Apple', email: 'fiona@example.com' },
    { id: 7, nombre: 'George', apellido: 'Clooney', email: 'george@example.com' },
    { id: 8, nombre: 'Hannah', apellido: 'Montana', email: 'hannah@example.com' },
    { id: 9, nombre: 'Ian', apellido: 'McKellen', email: 'ian@example.com' },
    { id: 10, nombre: 'Jane', apellido: 'Doe', email: 'jane@example.com' },
    { id: 11, nombre: 'Kevin', apellido: 'Bacon', email: 'kevin@example.com' },
    { id: 12, nombre: 'Laura', apellido: 'Palmer', email: 'laura@example.com' },
    { id: 13, nombre: 'Michael', apellido: 'Jordan', email: 'michael@example.com' },
    { id: 14, nombre: 'Nina', apellido: 'Simone', email: 'nina@example.com' },
    { id: 15, nombre: 'Oscar', apellido: 'Wilde', email: 'oscar@example.com' }
  ];

  onAddUser(user: User) {
    this.usersList.push({
      ...user,
      id: this.usersList[this.usersList.length - 1].id + 1,
  });

  }

}
