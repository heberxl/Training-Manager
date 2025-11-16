import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../../../../core/services/students/students';
import { formGroup } from './validators';


@Component({
  selector: 'app-students-form',
  standalone: false,
  templateUrl: './students-form.html',
  styleUrl: './students-form.scss'
})
export class StudentsForm {
  createForm: FormGroup;
  studentId: number | null = null;
  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private router: Router
  ) {
    this.createForm = this.fb.group(formGroup);

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.studentId = Number(params['id']);
        this.isEditing = true;
        this.studentsService.getStudent(this.studentId).subscribe((student) => {
          if (student) {
            this.createForm.patchValue(student);
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.isEditing) {
      this.studentsService.updateStudent(this.createForm.value);
    } else {
      this.studentsService.addStudent(this.createForm.value);
    }
    this.createForm.reset();

    this.router.navigate(['dashboard', 'students']);
  }

  inputValid(inputName: 'nombre' | 'apellido' | 'direccion' | 'telefono' | 'email') {
    return this.createForm.get(inputName)?.valid && this.createForm.get(inputName)?.touched;
  }

  inputInvalid(inputName: 'nombre' | 'apellido' | 'direccion' | 'telefono' | 'email') {
    return (
      this.createForm.get(inputName)?.invalid &&
      this.createForm.get(inputName)?.touched &&
      this.createForm.get(inputName)?.dirty
    );
  }

  getError(inputName: 'nombre' | 'apellido' | 'direccion' | 'telefono' | 'email') {
    if (!this.createForm.get(inputName)?.errors) {
      return null;
    }

    const errors = Object.keys(this.createForm.get(inputName)?.errors as string[]);

    if (errors.length === 0) {
      return null;
    }

    let message = '';

    errors.forEach((error) => {
      switch (error) {
        case 'required':
          message += 'Este campo es requerido';
          break;
        case 'minlength':
          message += 'Este campo debe tener al menos 1 caracteres';
          break;

        default:
          break;
      }
    });

    return message;
  }

}
