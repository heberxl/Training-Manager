import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from '../../interface/alumnos';
@Component({
  selector: 'app-alumnos-form',
  standalone: false,
  templateUrl: './alumnos-form.html',
  styleUrl: './alumnos-form.scss'
})
export class AlumnosForm {
  public alumnosForm: FormGroup;
    @Output() sendUser = new EventEmitter<Alumno>();
  
    constructor(private fb: FormBuilder) {
      this.alumnosForm = this.fb.group({
        nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
        apellido: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
        direccion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
        telefono: ['', [Validators.required, Validators.pattern('^[0-9]{3}-[0-9]{4}$')]],
        email: ['', [Validators.email]],
  
      });
    }

      onSubmit() {

    if (this.alumnosForm.invalid) {
      alert('Formulario no válido');
      return;
    }
    this.sendUser.emit(this.alumnosForm.value);
  }
  get isNameInvalid(): boolean {
    return this.alumnosForm.controls['nombre'].dirty && this.alumnosForm.controls['nombre'].invalid;
  }
  get isApellidoInvalid(): boolean {
    return this.alumnosForm.controls['apellido'].dirty && this.alumnosForm.controls['apellido'].invalid;
  }
  get isDireccionInvalid(): boolean {
    return this.alumnosForm.controls['direccion'].dirty && this.alumnosForm.controls['direccion'].invalid;
  }
  get isEmailInvalid(): boolean {
    return this.alumnosForm.controls['email'].dirty && this.alumnosForm.controls['email'].invalid;
  }

}
