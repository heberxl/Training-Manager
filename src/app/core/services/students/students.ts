import { Injectable } from '@angular/core';
import { Student } from './model/Student';
import { BehaviorSubject } from 'rxjs';
import { API_URL } from '../../utils/constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private students: Student[] = [];
  private studentSubject = new BehaviorSubject<Student[]>([]);
  students$ = this.studentSubject.asObservable();
  
  private studentsUrl = `${API_URL}/students`;

  constructor(private http: HttpClient) {
      this.getStudents();
  }


  getStudentsForEffects() {
      return this.http.get<Student[]>(this.studentsUrl);
    }

  getStudents() {
      this.http.get<Student[]>(this.studentsUrl).subscribe((students) => {
        this.students = students;
        this.studentSubject.next(students);
      });
    }
  
   getStudent(id: number) {
      return this.http.get<Student>(`${this.studentsUrl}/${id}`);
    }

   addStudent(student: Student) {
        this.http.post<Student>(this.studentsUrl, student).subscribe((student) => {
          this.students.push(student);
          this.studentSubject.next([...this.students]);
        });
    }
    updateStudent(student: Student) {
      this.http.put<Student>(`${this.studentsUrl}/${student.id}`, student).subscribe((student) => {
          this.studentSubject.next([...this.students, student]);
        });
    }
    
    deleteStudent(id: number) {
      this.http.delete<Student>(`${this.studentsUrl}/${id}`).subscribe(() => {
              this.studentSubject.next(this.students.filter((s) => s.id !== id));
            });
    }

}
