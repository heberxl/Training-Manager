import { Component, EventEmitter, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../Interface/User';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss'
})
export class UserForm {
  public userForm: FormGroup;
  @Output() sendUser = new EventEmitter<User>();

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      apellido: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ['', [Validators.email]],

    });
  }
  onSubmit() {
    console.log(this.userForm.value);
    console.log(this.userForm.controls['nombre'].errors);
    if (this.userForm.invalid) {
      alert('Formulario no válido');
      return;
    }
    this.sendUser.emit(this.userForm.value);
  }

  get isNameInvalid(): boolean {
    return this.userForm.controls['nombre'].dirty && this.userForm.controls['nombre'].invalid;
  }

  get isApellidoInvalid(): boolean {
    return this.userForm.controls['apellido'].dirty && this.userForm.controls['apellido'].invalid;
  }

  get isEmailInvalid(): boolean {
    return this.userForm.controls['email'].dirty && this.userForm.controls['email'].invalid;
  }
}
