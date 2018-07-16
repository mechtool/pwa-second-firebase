import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplesRoutingModule } from './samples-routing.module';
import { SamplesComponent } from './samples.component';

@NgModule({
  imports: [
    CommonModule,
    SamplesRoutingModule
  ],
  declarations: [SamplesComponent]
})
export class SamplesModule { }
