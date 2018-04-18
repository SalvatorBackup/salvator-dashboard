import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(password): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/login`, { password })
  }
}
