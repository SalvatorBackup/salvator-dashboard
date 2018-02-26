import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { API_URL } from '../constants';

@Injectable()
export class AgentsService {

  constructor(private http: HttpClient) { }

  addAgent(agent): Observable<Object> {
    return this.http.post(`${API_URL}/agents`, agent)
  }

  getAgents(): Observable<Object> {
    return this.http.get(`${API_URL}/agents`)
  }

  deleteAgent(id): Observable<Object> {
    return this.http.delete(`${API_URL}/agents/${id}`)
  }
}
