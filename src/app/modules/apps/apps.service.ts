import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppsService {
  protected url = 'http://localhost:20000/api/apps';

  constructor(private http: HttpClient) { }

  public get apps(): Observable<any> {
    return this.http.get(this.url);
  }

  public postProfile(appProfile): Observable<any> {
    return this.http.post<any>(`${this.url}/profile`, appProfile);
  }
}
