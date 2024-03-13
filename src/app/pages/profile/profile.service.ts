import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private accessToken: string;

  constructor(private http: HttpClient) {
    // Retrieve access token from local storage during service initialization
    this.accessToken = localStorage.getItem('accessToken') ?? ''; // Use default value if null
  }

  getProfile(): Observable<any> {
    // Check if access token is available
    if (!this.accessToken) {
      throw new Error('Access token not found');
    }

    // Set up the HTTP headers with the access token
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + this.accessToken
    );
    // Make the HTTP GET request with the headers
    return this.http.get<any>('http://localhost:3000/users/profile', {
      headers,
    });
  }
}
