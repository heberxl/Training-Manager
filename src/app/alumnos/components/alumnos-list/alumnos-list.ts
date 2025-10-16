import { Component, Input, ViewChild } from '@angular/core';
import { Alumno } from '../../interface/alumnos';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-alumnos-list',
  standalone: false,
  templateUrl: './alumnos-list.html',
  styleUrl: './alumnos-list.scss'
})
export class AlumnosList {
  @Input() alumnos: Alumno[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'direccion', 'telefono', 'email'];
  dataSource = new MatTableDataSource<Alumno>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.alumnos;
  }
}
