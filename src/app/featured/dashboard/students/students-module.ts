import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing-module';
import { Students } from './students';
import { StudentsForm } from './students-form/students-form/students-form';
import { StudentsTable } from './students-table/students-table/students-table';
import { share } from 'rxjs';
import { SharedModule } from '../../../shared/shared-module';
import { StoreModule } from '@ngrx/store';
import { studentsFeature } from './store/students.reducer';
import { StudentsEffects } from './store/students.effects';
import { EffectsModule } from '@ngrx/effects';
import { StudentsService } from '../../../core/services/students/students';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    Students,
    StudentsForm,
    StudentsTable
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    StoreModule.forFeature(studentsFeature),
    EffectsModule.forFeature([StudentsEffects]),
    MatProgressSpinnerModule
  ],
  providers: [StudentsService],
})
export class StudentsModule { }
