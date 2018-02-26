import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SaveOrdersService } from './save-orders.service'

@Injectable()
export class SaveOrdersResolver implements Resolve<Observable<Object>> {
  constructor(private saveOrdersService: SaveOrdersService) { }

  resolve() {
    return this.saveOrdersService.getSaveOrders()
  }
}
