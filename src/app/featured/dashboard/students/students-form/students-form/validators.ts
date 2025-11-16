import { Validators } from '@angular/forms';

export const formGroup = {
  id: [''],
  nombre: ['', [Validators.required, Validators.minLength(2)]],
  apellido: ['', [Validators.required, Validators.minLength(2)]],
  direccion: ['', [Validators.required, Validators.minLength(5)]],
  telefono: ['', [Validators.required, Validators.minLength(7)]],
  email: ['', [Validators.required, Validators.email]],
  status: ['ACTIVE', [Validators.required]],
};
