import { Injectable } from '@angular/core';
import { API_URL } from '../../utils/constants';
import { HttpClient } from '@angular/common/http';
import { User } from './model/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = `${API_URL}/user`;
  user: User | null = null;
  
  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    this.http.get<User[]>(`${this.usersUrl}`).subscribe(users => {
      const user = users.find(u => u.email === email);
        if(!user) {
          throw new Error('Email no válido');
        }
        if(user.password !== password) {
          throw new Error('Contraseña incorrecta');
        }
        localStorage.setItem('token', user.email);
        this.user = user;
        this.router.navigate(['/dashboard']);
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.user = null;
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    //return localStorage.getItem('token') !== null;
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return token === this.user?.email;
  }
}
