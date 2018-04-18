import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { StorageService } from './storage.service'

@Injectable()
export class StorageResolver implements Resolve<Observable<Object>> {
  constructor(private storageService: StorageService) { }

  resolve() {
    return this.storageService.getStorages()
  }
}
