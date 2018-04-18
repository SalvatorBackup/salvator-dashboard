import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class SettingsService {

  constructor(private http: HttpClient) { }

  getSettings(): Observable<Object> {
    return this.http.get(`${environment.apiUrl}/settings`)
  }
}
