import { TestBed } from '@angular/core/testing';
import { CoursesService } from './courses';
import { provideHttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

describe('Courses Service Test', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), Router],
    });
    
    service = TestBed.inject(CoursesService);
  });

  it('Debería crear el servicio', () => {
    expect(service).not.toBeNull();
  });

  it('Debería retornar un curso cuando se le pase un Id válido', () => {
    const testId = 1;
    service.getCourse(testId).subscribe((course) => {
      expect(course).not.toBeNull();
    });
  });
});
