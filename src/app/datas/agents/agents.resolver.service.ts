import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AgentsService } from './agents.service'

@Injectable()
export class AgentsResolver implements Resolve<Observable<Object>> {
  constructor(private agentsService: AgentsService) { }

  resolve() {
    return this.agentsService.getAgents()
  }
}
