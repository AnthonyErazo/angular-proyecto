import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import data from 'src/app/data/data';
import usersdata from 'src/app/data/usersdata';
import { Alums } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getDataObservable(): Observable<Alums[]> {
    return new Observable<Alums[]>((observer) => {
      // Simulamos un retraso de 2 segundos antes de emitir los datos
      setTimeout(() => {
        observer.next(data);
        observer.complete();
      }, 2000);
    });
  }
  authenticate(username: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = usersdata.find((user) => user.usuario === username && user.password === password);
        resolve(!!user);
      }, 2000);
    });
  }
}
