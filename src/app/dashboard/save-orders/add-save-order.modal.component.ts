import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { SaveOrdersService } from '../../datas/save-orders/save-orders.service';

@Component({
  selector: 'add-save-order-modal',
  templateUrl: './add-save-order.modal.component.html'
})
export class AddSaveOrderModalComponent {
  constructor(
    public activeModal: NgbActiveModal,
    private router: Router,
    private saveOrdersService: SaveOrdersService,
    private route: ActivatedRoute
  ) { }

  formContent = {
    name: '',
    includes: '',
    excludes: '',
    interval: ''
  }

  error: string = ''

  addSaveOrder() {
    this.saveOrdersService.addSaveOrder(this.formContent).subscribe(res => {
      this.router.navigate(['/admin/save-orders'])
    }, err => {
      this.error = err.error
    }, () => this.activeModal.close())
  }
}
