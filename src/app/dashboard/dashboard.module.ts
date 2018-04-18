import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { AgentsComponent } from './agents/agents.component';
import { SaveOrdersComponent } from './save-orders/save-orders.component';
import { PlanningsComponent } from './plannings/plannings.component';
import { AddAgentModalComponent } from './agents/add-agent.modal.component';
import { AddSaveOrderModalComponent } from './save-orders/add-save-order.modal.component';
import { SettingsComponent } from './settings/settings.component';
import { StorageComponent } from './storage/storage.component';
import { ConfigureStorageModalComponent } from './storage/configure-storage.modal.component';

const COMPONENTS = [
  DashboardComponent,
  AgentsComponent,
  SaveOrdersComponent,
  PlanningsComponent,
  AddAgentModalComponent,
  AddSaveOrderModalComponent,
  SettingsComponent,
  StorageComponent,
  ConfigureStorageModalComponent,
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AngularFontAwesomeModule,
    DashboardRoutingModule,
    FormsModule,
    MomentModule
  ],
  declarations: [...COMPONENTS],
  entryComponents: [AddAgentModalComponent, AddSaveOrderModalComponent, ConfigureStorageModalComponent]
})
export class DashboardModule { }
