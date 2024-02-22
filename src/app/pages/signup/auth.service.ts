import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(user: {
    email: string;
    username: string;
    password: string;
  }): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/auth/signup`, user);
  }

  login(credentials: any): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string }>(
      `http://localhost:3000/auth/signin`,
      credentials
    );
  }

  forgotPassword(credentials: any): Observable<any> {
    return this.http.post(
      `http://localhost:3000/auth/forgot-password`,
      credentials
    );
  }

  expiringToken(time: number) {
    setTimeout(() => {
      localStorage.clear();
    }, time);
  }

  logOut() {
    localStorage.clear();
    window.location.reload();
  }
}
