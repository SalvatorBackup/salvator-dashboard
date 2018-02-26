import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
      console.log('yes')
    }, err => {
      console.log(err)
    }, () => {
      console.log('nav')
      this.router.navigate(['/agents'])
    })
  }
}
