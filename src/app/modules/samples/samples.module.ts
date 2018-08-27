import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../common/app-common.module';

import { SamplesRoutingModule } from './samples-routing.module';
import { SamplesComponent } from './samples.component';
import { ForecastComponent } from './components/forecast/forecast.component';

//-----------------material-----------------------------
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
      AppCommonModule,
    SamplesRoutingModule,
      //-----------------material-----------------------
      MatCardModule,
  ],
  declarations: [
      SamplesComponent,
      ForecastComponent
  ]
})
export class SamplesModule { }
