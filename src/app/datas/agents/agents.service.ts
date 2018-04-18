import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class AgentsService {

  constructor(private http: HttpClient) { }

  addAgent(agent): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/agents`, agent)
  }

  getAgents(): Observable<Object> {
    return this.http.get(`${environment.apiUrl}/agents`)
  }

  deleteAgent(id): Observable<Object> {
    return this.http.delete(`${environment.apiUrl}/agents/${id}`)
  }
}
