import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  settings = {}
  settingsKeys = []

  ngOnInit() {
    this.route.data.subscribe(datas => {
      this.settings = datas.settings
      this.settingsKeys = Object.keys(this.settings)
      console.log(this.settingsKeys)
    })
  }
}
