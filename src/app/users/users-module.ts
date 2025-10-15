import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users } from './users';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserList } from './components/user-list/user-list';
import { UserForm } from './components/user-form/user-form';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared-module';
@NgModule({
  declarations: [
    Users,
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
  exports: [
    Users
  ]
})
export class UsersModule { }
