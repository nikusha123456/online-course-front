import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private accessToken: string;

  constructor(private http: HttpClient) {
    this.accessToken = localStorage.getItem('accessToken') ?? '';
  }

  getProfile(): Observable<any> {
    if (!this.accessToken) {
      throw new Error('Access token not found');
    }

    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + this.accessToken
    );

    return this.http.get<any>('http://localhost:3000/users/profile', {
      headers,
    });
  }

  deleteAccount(): Observable<any> {
    localStorage.clear();
    window.location.reload();
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + this.accessToken
    );

    return this.http.delete<any>('http://localhost:3000/users/profile', {
      headers,
    });
  }

  editAccount(user: {
    username: string;
    description: string;
    imageUrl: string;
  }): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + this.accessToken
    );

    window.location.reload();
    return this.http.patch<any>('http://localhost:3000/users/edit-user', user, {
      headers,
    });
  }
}
