import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RootState } from '../../../core/store';
import { Store } from '@ngrx/store';
import { setAuthUser } from '../../../core/store/auth/auth.action';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  loginForm: FormGroup;
  constructor(
    private authService: AuthService, 
    private fb: FormBuilder, 
    private router: Router,
    private store: Store<RootState>,
   ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]});
  }

  onLogin() {
    if (!this.loginForm.valid) {
      alert('Formulario no válido');
      return;
    }

    try {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((res) => {
        const user = res;
        if(!user) {
          throw new Error('Email no válido');
        }
        if(user.password !== this.loginForm.value.password) {
          throw new Error('Contraseña incorrecta');
        }
        
          this.store.dispatch(setAuthUser({ payload: user }));
          this.router.navigate(['/dashboard']);
      });
    } catch (error: any) {
      console.log(error);
      alert(error);
    }
  }
  
}
