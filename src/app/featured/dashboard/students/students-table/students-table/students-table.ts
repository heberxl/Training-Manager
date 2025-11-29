import { Component, ViewChild } from '@angular/core';
import { StudentsService } from '../../../../../core/services/students/students';
import { Student, studentColumns } from '../../../../../core/services/students/model/Student';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { RootState } from '../../../../../core/store';
import { Store } from '@ngrx/store';
import { selectError, selectIsLoading, selectStudents } from '../../store/students.selectors';
import { StudentsActions } from '../../store/students.actions';

@Component({
  selector: 'app-students-table',
  standalone: false,
  templateUrl: './students-table.html',
  styleUrl: './students-table.scss'
})
export class StudentsTable {
  displayedColumns: string[] = studentColumns;
  dataSource = new MatTableDataSource<Student>([]);

  @ViewChild(MatPaginator)
  set paginator(paginator: MatPaginator) {
    if (paginator) {
      this.dataSource.paginator = paginator;
    }
  }

  students$: Observable<Student[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(
    private studentsService: StudentsService,
    private store: Store<RootState>
  ) {
    this.students$ = this.store.select(selectStudents);
    this.isLoading$ = this.store.select(selectIsLoading);
    this.error$ = this.store.select(selectError);
  }
  
  ngOnInit() {
    this.store.dispatch(StudentsActions.loadStudents());
    
    this.students$.subscribe({
      next: (students) => {
        this.dataSource.data = students;
      },
      error: (error) => {
        console.error('Error loading students:', error);
      }
    });
  }

  onDeleteStudent(id: number) {
    this.studentsService.deleteStudent(id);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
