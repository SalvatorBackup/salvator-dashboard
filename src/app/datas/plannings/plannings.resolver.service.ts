import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PlanningsService } from './plannings.service'

@Injectable()
export class PlanningsResolver implements Resolve<Observable<Object>> {
  constructor(private planningsService: PlanningsService) { }

  resolve() {
    return this.planningsService.getPlannings()
  }
}
