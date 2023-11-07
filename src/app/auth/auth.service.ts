import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../models';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginPayload } from './models/authmodels';
import { environment } from '../environments/environments.local';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authUser$ = new BehaviorSubject<User | null>(null);
  public authUser$ = this._authUser$.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(payload: LoginPayload): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      setTimeout(()=>{
        this.httpClient
        .get<User[]>(
          `${environment.baseUrl}/users?usuario=${payload.user}&password=${payload.password}`
        )
        .subscribe({
          next: (response) => {
            if (!response.length) {
              observer.next(false);
            } else {
              const authUser = response[0];
              this._authUser$.next(authUser);
              localStorage.setItem('token', authUser.token);
              this.router.navigate(['home']);
              observer.next(true);
            }
            observer.complete();
          },
          error: (err) => {
            observer.error(err);
          },
        });
      },2000);
    });
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

