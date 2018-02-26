import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { API_URL } from '../constants';

@Injectable()
export class SaveOrdersService {

  constructor(private http: HttpClient) { }

  addSaveOrder(saveOrder): Observable<Object> {
    return this.http.post(`${API_URL}/save-orders`, saveOrder)
  }

  getSaveOrders(): Observable<Object> {
    return this.http.get(`${API_URL}/save-orders`)
  }

  deleteSaveOrder(id): Observable<Object> {
    return this.http.delete(`${API_URL}/save-orders/${id}`)
  }
}
