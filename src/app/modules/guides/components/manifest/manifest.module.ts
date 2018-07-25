import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../../../common/app-common.module';
import { ManifestRoutingModule } from './manifest-routing.module';

//--------------------components----------------------------
import { ManifestComponent } from './manifest.component';
//--------------material-----------------------------------
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatCardModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    ManifestRoutingModule,
      AppCommonModule,
      //-------------material-------------------
      FlexLayoutModule,
      MatCardModule,
  ],
  declarations: [
      ManifestComponent,
  ]
})
export class ManifestModule { }
