import { Injectable } from '@angular/core';
import { Course } from './model/Course';
import { mockCourses } from './data/mock';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: Course[] = [];
  private courseSubject = new BehaviorSubject<Course[]>([]);
  courses$ = this.courseSubject.asObservable();

  private coursesUrl = `${API_URL}/courses`;

  constructor(private http: HttpClient) {
    this.getCourses();
  }

  getCoursesForEffects() {
    return this.http.get<Course[]>(this.coursesUrl);
  }

  getCourses() {
    this.http.get<Course[]>(this.coursesUrl).subscribe((courses) => {
      this.courses = courses;
      this.courseSubject.next(courses);
    });
  }

  getCourse(id: number) {
    return this.http.get<Course>(`${this.coursesUrl}/${id}`);
  }

  addCourse(course: Course) {
    this.http.post<Course>(this.coursesUrl, course).subscribe((course) => {
      this.courses.push(course);
      this.courseSubject.next([...this.courses]);
    });
  }

  updateCourse(course: Course) {
    this.http.put<Course>(`${this.coursesUrl}/${course.id}`, course).subscribe((course) => {
      this.courseSubject.next([...this.courses, course]);
    });
  }

  deleteCourse(id: number) {
    this.http.delete<Course>(`${this.coursesUrl}/${id}`).subscribe(() => {
        this.courseSubject.next(this.courses.filter((c) => c.id !== id));
      });
  }
}



