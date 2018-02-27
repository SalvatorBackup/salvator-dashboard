import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import { AgentsService } from '../../datas/agents/agents.service'
import { AddAgentModalComponent } from './add-agent.modal.component';

@Component({
  selector: 'agents',
  templateUrl: './agents.component.html'
})
export class AgentsComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private agentsService: AgentsService,
    private router: Router,
    private toaster: ToastrService
  ) { }

  agents = []

  ngOnInit() {
    this.route.data.subscribe(datas => {
      this.agents = datas.agents
    })
  }

  openAddAgentModal() {
    this.modalService.open(AddAgentModalComponent)
  }

  blockAgent(id) {
    this.agentsService.deleteAgent(id).subscribe(res => {
      this.router.navigate(['/admin/agents'])
    }, err => {
      console.log('yolooooooooo')
      this.toaster.error('Failed...', 'Failed to block agent')
    })
  }
}
