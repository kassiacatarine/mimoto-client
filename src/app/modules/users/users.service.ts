import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  protected url = 'http://localhost:20000/api/users';

  constructor(private http: HttpClient) { }

  public get users(): Observable<any> {
    return this.http.get(this.url);
  }

  public user(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  public postProfile(userProfile): Observable<any> {
    return this.http.post(`${this.url}/profile`, userProfile);
  }
}
