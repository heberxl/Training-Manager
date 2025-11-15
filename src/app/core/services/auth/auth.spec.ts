import { inject, TestBed } from "@angular/core/testing";
import { AuthService } from "./auth";
import { H } from "@angular/cdk/keycodes";
import { HttpClient, provideHttpClient, withFetch } from "@angular/common/http";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { provideHttpClientTesting } from "@angular/common/http/testing";

describe('Auth Services Tests', () => {
  let service: AuthService;
  let http: HttpClient
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AuthService, provideHttpClient(withFetch()), Router, provideHttpClientTesting()],
    });
    service = TestBed.inject(AuthService);
    http = TestBed.inject(HttpClient);
  });

  it('Debería crear el servicio', () => {
      expect(service).not.toBeNull();
    });
  
  it('Debería devolver un booleano si est{a logueado', () => {
      expect(service.isAuthenticated()).toBe(false);
    });
/*  
  it('Debería llamar a login', () => {
      const httpSpy = spyOn(http, 'get').and.returnValue(of([]));
      service.login('email', 'password');
      expect(httpSpy).toHaveBeenCalled();
    });
*/  
});
