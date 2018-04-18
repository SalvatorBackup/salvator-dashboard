import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { StorageService, StorageState } from '../../datas/storage/storage.service';
import { ConfigureStorageModalComponent } from './configure-storage.modal.component';

@Component({
  selector: 'storage',
  templateUrl: './storage.component.html',
  styleUrls: ['storage.component.scss']
})
export class StorageComponent implements OnInit {

  storageState: StorageState;

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
    private toaster: ToastrService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(datas => {
      this.storageState = datas.storage
    })
  }

  configModal(driver) {
    const configModal = this.modalService.open(ConfigureStorageModalComponent);
    configModal.componentInstance.driver = this.storageState.availableDrivers[driver]

    configModal.result.then(result => {
      this.storageState = result
    }).catch(err => null)
  }

  switchStorage(driverName){
    this.storageService.switchStorage(driverName).subscribe(res => {
      this.storageState = res
    })
  }
}
