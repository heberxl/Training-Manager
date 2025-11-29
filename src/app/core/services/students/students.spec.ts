import { TestBed } from '@angular/core/testing';
import { StudentsService } from './students';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StudentsService', () => {
  let service: StudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // 👈 módulo de testing de Http
      providers: [StudentsService],
    });

    service = TestBed.inject(StudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
