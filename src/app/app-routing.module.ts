import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: true,
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
