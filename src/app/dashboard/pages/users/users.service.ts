import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/app/environments/environments.local';
import { Alums, Course } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _authUser$ = new BehaviorSubject<Alums | null>(null);
  public authUser$ = this._authUser$.asObservable();


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
}
