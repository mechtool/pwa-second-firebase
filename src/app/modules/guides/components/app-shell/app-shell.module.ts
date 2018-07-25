import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../../../common/app-common.module';

import { AppShellRoutingModule } from './app-shell-routing.module';
import { AppShellComponent } from './app-shell.component';
//--------------material-----------------------------------
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
      FlexLayoutModule,
      MatCardModule,
      AppCommonModule,
    AppShellRoutingModule
  ],
  declarations: [
      AppShellComponent,
  ]
})
export class AppShellModule { }
