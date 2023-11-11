import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environments.local';
import { Course } from './models/coursesModels';
import { Alums } from '../users/models/usersModels';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${environment.baseUrl}/courses`);
  }
  
  getCourseById(courseId: number): Observable<Course> {
    return this.httpClient.get<Course>(`${environment.baseUrl}/courses/${courseId}`);
  }
  getAlumsByIds(coursesIds: number[]): Observable<Alums[]> {
    const courseIdsString = coursesIds.join('&id=');
    return this.httpClient.get<Alums[]>(`${environment.baseUrl}/alums?id=${courseIdsString}`);
  }
  createCourse(course: Course): Observable<Course> {
    return this.httpClient.post<Course>(`${environment.baseUrl}/courses`, course);
  }
  updateCourse(courseId: number, newData: Course): Observable<Course> {
    return this.httpClient.put<Course>(`${environment.baseUrl}/courses/${courseId}`, newData);
  }
  deleteCourse(courseId: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.baseUrl}/courses/${courseId}`);
  }
}
