import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AgentsComponent } from './agents/agents.component';
import { SaveOrdersComponent } from './save-orders/save-orders.component';
import { PlanningsComponent } from './plannings/plannings.component';
import { AgentsResolver } from '../datas/agents/agents.resolver.service';
import { SaveOrdersResolver } from '../datas/save-orders/save-orders.resolver.service';
import { PlanningsResolver } from '../datas/plannings/plannings.resolver.service';
import { SettingsResolver } from '../datas/settings/settings.resolver.service'
import { SettingsComponent } from './settings/settings.component';
import { StorageComponent } from './storage/storage.component';
import { StorageResolver } from '../datas/storage/storage.resolver.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'agents',
        component: AgentsComponent,
        resolve: {
          agents: AgentsResolver
        },
        runGuardsAndResolvers: 'always'
      },
      {
        path: 'save-orders',
        component: SaveOrdersComponent,
        resolve: {
          saveOrders: SaveOrdersResolver
        },
        runGuardsAndResolvers: 'always'
      },
      {
        path: 'plannings',
        component: PlanningsComponent,
        resolve: {
          agents: AgentsResolver,
          saveOrders: SaveOrdersResolver,
          plannings: PlanningsResolver
        },
        runGuardsAndResolvers: 'always'
      },
      {
        path: 'storage',
        component: StorageComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          storage: StorageResolver
        }
      },
      {
        path: 'settings',
        component: SettingsComponent,
        resolve: {
          settings: SettingsResolver
        },
        runGuardsAndResolvers: 'always'
      },
      {
        path: '',
        redirectTo: '/admin/agents',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
