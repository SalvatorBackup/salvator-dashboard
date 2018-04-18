import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class PlanningsService {

  constructor(private http: HttpClient) { }

  addPlanning(planning): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/plannings`, planning)
  }

  getPlannings(): Observable<Object> {
    return this.http.get(`${environment.apiUrl}/plannings`)
  }

  removePlanning(planningId): Observable<Object> {
    return this.http.delete(`${environment.apiUrl}/plannings/${planningId}`)
  }
}
