import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  protected url = '/users';

  constructor(
    private http: HttpClient
  ) { }

  public get users(): Observable<any> {
    return this.http.get<any>(this.url);
  }

}
