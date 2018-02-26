import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { API_URL } from '../constants';

@Injectable()
export class SettingsService {

  constructor(private http: HttpClient) { }

  getSettings(): Observable<Object> {
    return this.http.get(`${API_URL}/settings`)
  }
}
