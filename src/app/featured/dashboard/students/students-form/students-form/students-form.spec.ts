import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { StudentsForm } from './students-form';
import { StudentsTable } from '../../students-table/students-table/students-table';
import { Students } from '../../students';

import { SharedModule } from '../../../../../shared/shared-module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StudentsService } from '../../../../../core/services/students/students';

describe('StudentsForm', () => {
  let component: StudentsForm;
  let fixture: ComponentFixture<StudentsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Students,
        StudentsForm,
        StudentsTable,
      ],
      imports: [
        CommonModule,
        SharedModule,
        MatProgressSpinnerModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        provideMockStore(),
        StudentsService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
