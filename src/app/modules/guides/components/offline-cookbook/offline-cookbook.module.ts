import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfflineCookbookRoutingModule } from './offline-cookbook-routing.module';
import { AppCommonModule } from '../../../common/app-common.module';
import { OfflineCookbookComponent } from './offline-cookbook.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import { MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
      AppCommonModule,
    OfflineCookbookRoutingModule,
      //-------------material-------------------
      FlexLayoutModule,
      MatCardModule,
  ],
  declarations: [
      OfflineCookbookComponent,
  ]
})
export class OfflineCookbookModule { }
