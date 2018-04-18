import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { StorageService, Driver } from '../../datas/storage/storage.service';

@Component({
  selector: 'configure-storage-modal',
  templateUrl: './configure-storage.modal.component.html'
})
export class ConfigureStorageModalComponent {

  constructor(
    public activeModal: NgbActiveModal,
    private router: Router,
    private route: ActivatedRoute,
    private storageService: StorageService
  ) { }

  _driver: Driver = null;

  formContent = {}

  set driver(driver) {
    this._driver = driver

    Object.keys(this._driver.configSchema).forEach(key => {
      this.formContent[key] = this._driver.config == null ? (this._driver.configSchema[key] === 'string' ? '' : 0) : this._driver.config[key]
    })
  }

  get configSchemaKeys() {
    return Object.keys(this._driver.configSchema)
  }

  saveConfig() {
    this.storageService.saveStorageConfig(this._driver.name, this.formContent).subscribe(res => {
      this.activeModal.close(res)
    })
  }
}
