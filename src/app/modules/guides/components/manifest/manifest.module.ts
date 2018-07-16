import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../../../common/app-common.module';
import { ManifestRoutingModule } from './manifest-routing.module';

//--------------------components----------------------------
import { ManifestComponent } from './manifest.component';
import { IconsColorsComponent } from './icons-colors/icons-colors.component';
import { InstallMessagesComponent } from './install-messages/install-messages';
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
      IconsColorsComponent,
      InstallMessagesComponent,
  ]
})
export class ManifestModule { }
