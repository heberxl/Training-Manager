import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserForm } from './user-form';
import { UserList } from '../user-list/user-list';
import { Users } from '../../users';
import { SharedModule } from '../../../shared/shared-module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

describe('UserForm', () => {
  let component: UserForm;
  let fixture: ComponentFixture<UserForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Users,
                      UserList,
                      UserForm
                    ],
      imports: [
              SharedModule,
              CommonModule,
              FormsModule,
              ReactiveFormsModule,
              MatTableModule,
              MatPaginatorModule,
              MatFormFieldModule,
              MatButtonModule,
              MatInputModule
        ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
