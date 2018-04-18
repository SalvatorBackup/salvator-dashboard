import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class StorageService {

  constructor(private http: HttpClient) { }

  getStorages(): Observable<Object> {
    return this.http.get(`${environment.apiUrl}/storage`)
  }

  saveStorageConfig(driverName, config): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/storage/${driverName}`, config)
  }

  switchStorage(driverName): Observable<any> {
    return this.http.post(`${environment.apiUrl}/storage`, { switch: driverName })
  }
}

export interface StorageState {
  activeDriver: string;
  availableDrivers: { [any: string]: Driver };
}

export interface Driver {
  name: string;
  configSchema: { [any: string]: string };
  config: { [any: string]: string | number | boolean };
}
