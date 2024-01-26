import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'accessToken';
  constructor(private http: HttpClient) {}

  signup(user: {
    email: string;
    username: string;
    password: string;
  }): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/auth/signup`, user);
  }

  login(email2: string, password2: string): Observable<any> {
    const credentials = { email2, password2 };
    return this.http.post(`http://localhost:3000/auth/signin`, credentials);
  }

  setAuthToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }
}
