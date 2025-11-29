import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../../shared/shared-module';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing-module';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StudentsTable } from './students-table/students-table/students-table';
import { StudentsForm } from './students-form/students-form/students-form';
import { Students } from './students';

import { provideMockStore } from '@ngrx/store/testing';

describe('Students', () => {
  let component: Students;
  let fixture: ComponentFixture<Students>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Students,
        StudentsForm,
        StudentsTable,
      ],
      imports: [
        CommonModule,
        StudentsRoutingModule,
        SharedModule,
        MatProgressSpinnerModule,
      ],
      providers: [
        provideMockStore(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Students);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
