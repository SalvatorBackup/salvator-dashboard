import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { API_URL } from '../constants';

@Injectable()
export class PlanningsService {

  constructor(private http: HttpClient) { }

  addPlanning(planning): Observable<Object> {
    return this.http.post(`${API_URL}/plannings`, planning)
  }

  getPlannings(): Observable<Object> {
    return this.http.get(`${API_URL}/plannings`)
  }

  removePlanning(planningId): Observable<Object> {
    return this.http.delete(`${API_URL}/plannings/${planningId}`)
  }
}
