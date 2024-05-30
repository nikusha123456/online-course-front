import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private accessToken: string;
  constructor(private http: HttpClient) {
    this.accessToken = localStorage.getItem('accessToken') ?? '';
  }

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

  createCourse(course: {
    course_title: string;
    description: string;
    price: number;
    imageUrl: string;
  }): Observable<any> {
    if (!this.accessToken) {
      throw new Error('Access token not found');
    }

    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + this.accessToken
    );

    return this.http.post<any>(`http://localhost:3000/courses/create`, course, {
      headers,
    });
  }

  editCourse(course: {
    id: number;
    course_title: string;
    price: number;
    imageUrl: string;
  }): Observable<any> {
    if (!this.accessToken) {
      throw new Error(' Not Authorized');
    }
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + this.accessToken
    );

    return this.http.patch<any>(
      `http://localhost:3000/courses/edit/${course.id}`,
      course,
      {
        headers,
      }
    );
  }

  getMyCourses(page: number): Observable<any> {
    if (!this.accessToken) {
      throw new Error('Access token not found');
    }

    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + this.accessToken
    );

    return this.http.get<any>(
      `http://localhost:3000/courses/mycourses?page=${page}`,
      {
        headers,
      }
    );
  }
}
