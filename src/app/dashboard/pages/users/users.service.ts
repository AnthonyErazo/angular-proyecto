import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from 'src/app/environments/environments.local';
import { Alums } from './models/usersModels';
import { Course } from '../courses/models/coursesModels';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient: HttpClient) { }

  getAlums(): Observable<Alums[]> {
    return this.httpClient.get<Alums[]>(`${environment.baseUrl}/alums`);
  }
  
  getAlumById(alumId: number): Observable<Alums> {
    return this.httpClient.get<Alums>(`${environment.baseUrl}/alums?id=${alumId}`);
  }
  getCoursesByIds(coursesIds: number[]): Observable<Course[]> {
    const courseIdsString = coursesIds.join('&id=');
    console.log(typeof courseIdsString)
    return this.httpClient.get<Course[]>(`${environment.baseUrl}/courses?id=${courseIdsString}`);
  }
  createAlum(alum: Alums): Observable<Alums> {
    return this.httpClient.post<Alums>(`${environment.baseUrl}/alums`, alum);
  }
  updateAlum(alumId: number, newData: Alums): Observable<Alums> {
    return this.httpClient.put<Alums>(`${environment.baseUrl}/alums/${alumId}`, newData);
  }
  deleteAlum(alumId: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.baseUrl}/alums/${alumId}`);
  }
  
}
