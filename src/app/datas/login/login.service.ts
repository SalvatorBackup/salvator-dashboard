import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { API_URL } from '../constants';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(password): Observable<Object> {
    return this.http.post(`${API_URL}/login`, { password })
  }
}
