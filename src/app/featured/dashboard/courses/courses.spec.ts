import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Courses } from './courses';
import { SharedModule } from '../../../shared/shared-module';
import { CoursesRoutingModule } from './courses-routing-module';
import { CommonModule } from '@angular/common';
import { CoursesForm } from './courses-form/courses-form';
import { CoursesTable } from './courses-table/courses-table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CoursesService } from '../../../core/services/courses/courses';

import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('Courses', () => {
  let component: Courses;
  let fixture: ComponentFixture<Courses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Courses,
        CoursesTable,
        CoursesForm,
      ],
      imports: [
        CommonModule,
        SharedModule,
        CoursesRoutingModule,
        MatProgressSpinnerModule,
        HttpClientTestingModule,
      ],
      providers: [
        provideMockStore(),
        CoursesService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Courses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
