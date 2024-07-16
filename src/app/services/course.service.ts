import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from '../model/courses.model';
const baseUrl = 'http://localhost:3000/courses';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Courses[]> {
    return this.http.get<Courses[]>(baseUrl);
  }
}
