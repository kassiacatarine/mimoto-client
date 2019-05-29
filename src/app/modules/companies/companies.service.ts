import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  protected url = 'http://localhost:20000/api/companies';

  constructor(private http: HttpClient) {}

  public get companies(): Observable<any> {
    return this.http.get(this.url);
  }
}
