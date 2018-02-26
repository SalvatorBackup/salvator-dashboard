import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PlanningsService } from '../../datas/plannings/plannings.service';

@Component({
  selector: 'plannings',
  templateUrl: 'plannings.component.html'
})
export class PlanningsComponent implements OnInit {

  agents = []
  saveOrders = []
  plannings = []

  formContent: any = {}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private planningsService: PlanningsService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(datas => {
      this.agents = datas.agents
      this.saveOrders = datas.saveOrders
      this.plannings = datas.plannings
    })
  }

  addPlan() {
    this.planningsService.addPlanning(this.formContent).subscribe(res => {
      this.router.navigate(['/plannings'])
    })
  }

  deletePlan(id) {
    this.planningsService.removePlanning(id).subscribe(() => { }, () => { }, () => {
      this.router.navigate(['/plannings'])
    })
  }
}
