import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notices } from './models/homeModels';
import { environment } from 'src/app/environments/environments.local';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) {}

  getNotices(): Observable<Notices[]> {
    return this.httpClient.get<Notices[]>(`${environment.baseUrl}/notices`);
  }
}
