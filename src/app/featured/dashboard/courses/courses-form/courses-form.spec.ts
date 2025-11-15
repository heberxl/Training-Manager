import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesForm } from './courses-form';
import { SharedModule } from '../../../../shared/shared-module';
import { CoursesRoutingModule } from '../courses-routing-module';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { S } from '@angular/cdk/keycodes';
import { of } from 'rxjs';
import { CoursesService } from '../../../../core/services/courses/courses';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

describe('CoursesForm', () => {
  let component: CoursesForm;
  let fixture: ComponentFixture<CoursesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesForm],
      imports: [CommonModule, CoursesRoutingModule, SharedModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            snapshot: {
              params: {
                get: () => null
              },
            },
          },
        },
        provideHttpClient(withFetch()),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
