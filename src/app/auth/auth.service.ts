import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import usersdata from 'src/app/data/usersdata';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;

  login(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      setTimeout(()=>{
        const user = usersdata.find(
          (user) => user.usuario === username && user.password === password
        );
  
        if (user) {
          this.isAuthenticated = true;
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      },2000);
    });
  }

  logout(): void {
    this.isAuthenticated = false;
  }
}

