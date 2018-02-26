import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AddSaveOrderModalComponent } from './add-save-order.modal.component';
import { SaveOrdersService } from '../../datas/save-orders/save-orders.service';

@Component({
  selector: 'save-orders',
  templateUrl: './save-orders.component.html'
})
export class SaveOrdersComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
    private saveOrdersService: SaveOrdersService
  ) { }

  saveOrders = []

  ngOnInit() {
    this.route.data.subscribe(datas => {
      this.saveOrders = datas.saveOrders
    })
  }

  openAddSaveOrderModal() {
    this.modalService.open(AddSaveOrderModalComponent)
  }

  removeSaveOrder(id) {
    this.saveOrdersService.deleteSaveOrder(id).subscribe(() => {
      this.router.navigate(['/save-orders'])
    })
  }
}
