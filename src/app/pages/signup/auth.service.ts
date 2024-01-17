import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(user: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/auth/signup`, user);
  }
}
