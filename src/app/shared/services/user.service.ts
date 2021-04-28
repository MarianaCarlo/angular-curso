import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get(`${this.url}/users.json`);
  }

  public addUsers(user: any): Observable<any> {
    return this.http.post(`${this.url}/users.json`, user);
  }
}
