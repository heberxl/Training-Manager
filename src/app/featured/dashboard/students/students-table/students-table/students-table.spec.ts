import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentsTable } from './students-table';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../shared/shared-module';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsService } from '../../../../../core/services/students/students';

import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StudentsTable', () => {
  let component: StudentsTable;
  let fixture: ComponentFixture<StudentsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentsTable],
      imports: [
        CommonModule,
        SharedModule,
        HttpClientTestingModule,
      ],
      providers: [
        provideMockStore(),
        StudentsService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
