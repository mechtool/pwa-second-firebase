import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IconsColorsComponent} from './components/icons-colors/icons-colors.component';
import { AppCommonModule } from '../../../common/app-common.module';
import {InstallMessagesComponent} from './components/install-messages/install-messages'

import { InstallPromptRoutingModule } from './install-prompt-routing.module';
//--------------material-----------------------------------
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
      AppCommonModule,
      FlexLayoutModule,
      MatCardModule,
    InstallPromptRoutingModule
  ],
  declarations: [
      IconsColorsComponent,
      InstallMessagesComponent,
  ]
})
export class InstallPromptModule { }
