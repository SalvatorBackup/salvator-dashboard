import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SettingsService } from './settings.service'

@Injectable()
export class SettingsResolver implements Resolve<Observable<Object>> {
  constructor(private settingsSservice: SettingsService) { }

  resolve() {
    return this.settingsSservice.getSettings()
  }
}
