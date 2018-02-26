import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  menus = [
    {
      icon: 'globe',
      label: 'Agents',
      url: '/agents',
    },
    {
      icon: 'life-ring',
      label: 'Save orders',
      url: '/save-orders'
    },
    {
      icon: 'calendar',
      label: 'Plannings',
      url: '/plannings'
    },
    {
      icon: 'cog',
      label: 'Settings',
      url: '/settings'
    }
  ]

  activeMenu: number = 0;

  constructor(private router: Router) {

  }

  async navigate(event, id) {
    event.preventDefault()

    await this.router.navigateByUrl(this.menus[id].url)
    this.activeMenu = id
  }

}
