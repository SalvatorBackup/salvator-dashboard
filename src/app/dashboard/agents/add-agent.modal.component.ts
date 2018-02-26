import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AgentsService } from '../../datas/agents/agents.service'
@Component({
  selector: 'add-agent-modal',
  templateUrl: './add-agent.modal.component.html'
})
export class AddAgentModalComponent {
  constructor(
    public activeModal: NgbActiveModal,
    private agentsService: AgentsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  formContent = {
    name: '',
    endpoint: '',
    token: ''
  }

  error: string = ''

  addAgent() {
    this.agentsService.addAgent(this.formContent).subscribe(res => {
      this.router.navigate(['/agents'])
    }, err => {
      this.error = err.error
    }, () => this.activeModal.close())
  }
}
