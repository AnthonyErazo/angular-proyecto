import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environments.local';
import { LoginPayload, User } from './models/authmodels';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authUser$ = new BehaviorSubject<User | null>(null);
  public authUser$ = this._authUser$.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(payload: LoginPayload): Observable<void> {
    return this.httpClient
      .get<User[]>(
        `${environment.baseUrl}/users?usuario=${payload.user}&password=${payload.password}`
      )
      .pipe(
        map((response) => {
          if (!response.length) {
            throw new Error('Invalid credentials');
          } else {
            const authUser = response[0];
            this._authUser$.next(authUser);
            localStorage.setItem('token', authUser.token);
            this.router.navigate(['home']);
          }
        })
      );
  }

  verifyToken(): Observable<boolean> {
    return this.httpClient
      .get<User[]>(
        `${environment.baseUrl}/users?token=${localStorage.getItem('token')}`
      )
      .pipe(
        map((users) => {
          if (!users.length) {
            return false;
          } else {
            const authUser = users[0];
            this._authUser$.next(authUser);
            localStorage.setItem('token', authUser.token);
            return true;
          }
        })
      );
  }
}

