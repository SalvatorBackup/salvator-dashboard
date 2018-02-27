import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AgentsService } from './agents/agents.service';
import { AgentsResolver } from './agents/agents.resolver.service';
import { SaveOrdersService } from './save-orders/save-orders.service';
import { SaveOrdersResolver } from './save-orders/save-orders.resolver.service';
import { PlanningsService } from './plannings/plannings.service';
import { PlanningsResolver } from './plannings/plannings.resolver.service';
import { SettingsService } from './settings/settings.service';
import { SettingsResolver } from './settings/settings.resolver.service';
import { AuthInterceptor } from './auth-interceptor';

import { LoginService } from './login/login.service';

const SERVICES = [
  AgentsService,
  AgentsResolver,
  SaveOrdersService,
  SaveOrdersResolver,
  PlanningsService,
  PlanningsResolver,
  SettingsService,
  SettingsResolver,
  LoginService
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ...SERVICES,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
})
export class DatasModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DatasModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
