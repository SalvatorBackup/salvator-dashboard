import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class SaveOrdersService {

  constructor(private http: HttpClient) { }

  addSaveOrder(saveOrder): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/save-orders`, saveOrder)
  }

  getSaveOrders(): Observable<Object> {
    return this.http.get(`${environment.apiUrl}/save-orders`)
  }

  deleteSaveOrder(id): Observable<Object> {
    return this.http.delete(`${environment.apiUrl}/save-orders/${id}`)
  }
}
