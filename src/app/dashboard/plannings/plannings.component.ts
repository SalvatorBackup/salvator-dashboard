import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    private planningsService: PlanningsService,
    private toaster: ToastrService
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
      this.router.navigate(['/admin/plannings'])
    }, err => {
      this.toaster.error('Failed...', 'Failed to add planification')
    })
  }

  deletePlan(id) {
    this.planningsService.removePlanning(id).subscribe(() => {
      this.router.navigate(['/admin/plannings'])
    }, () => {
      this.toaster.error('Failed...', 'Failed to remove planification')
    })
  }
}
