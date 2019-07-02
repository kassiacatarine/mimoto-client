import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  protected url = 'http://localhost:20000/api/login';

  constructor(private http: HttpClient) { }

  public login(email: string, senha: string): Observable<any> {
    return this.http.get(`${this.url}?email=${email}&senha=${senha}`);
  }
}
