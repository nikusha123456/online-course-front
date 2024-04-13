import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  getCourses(page: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });

    return this.http.get<any>(`http://localhost:3000/courses?page=${page}`, {
      headers,
    });
  }

  sortByPriceHighToLow(page: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });

    return this.http.get<any>(
      `http://localhost:3000/courses/high-to-low?page=${page}`,
      { headers }
    );
  }

  sortByPriceLowToHigh(page: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });

    return this.http.get<any>(
      `http://localhost:3000/courses/low-to-high?page=${page}`,
      { headers }
    );
  }
}
