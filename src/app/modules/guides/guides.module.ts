import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../common/app-common.module';

import { GuidesRoutingModule } from './guides-routing.module';
import { GuidesComponent } from './guides.component';
//-----------------material--------------------------------------------------
import { MatCardModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    GuidesRoutingModule,
    //---------------material-----------------------
    MatCardModule,
  ],
  declarations: [
      GuidesComponent,
  ]
})
export class GuidesModule { }
