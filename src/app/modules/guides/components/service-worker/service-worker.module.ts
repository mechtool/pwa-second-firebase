import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceWorkerRoutingModule } from './service-worker-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material';
import {AppCommonModule} from '../../../common/app-common.module';
import {ServiceWorkerComponent} from './components/overview/service-worker.component';
import { LifeCycleComponent } from './components/life-cyrcle/life-cycle.component';
import { PerformanceLoadingComponent } from './components/performance-loading/performance-loading.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SpeedUpComponent } from './components/speed-up/speed-up.component';

@NgModule({
  imports: [
    CommonModule,
      AppCommonModule,
    ServiceWorkerRoutingModule,
      //-------------material-------------------
      FlexLayoutModule,
      MatCardModule,
  ],
  declarations: [
      ServiceWorkerComponent,
      LifeCycleComponent,
      PerformanceLoadingComponent,
      RegistrationComponent,
      SpeedUpComponent,
  ]
})
export class ServiceWorkerModule { }
