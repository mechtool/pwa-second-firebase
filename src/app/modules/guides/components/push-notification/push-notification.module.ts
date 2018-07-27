import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material';
import {AppCommonModule} from '../../../common/app-common.module';

import { PushNotificationRoutingModule } from './push-notification-routing.module';
import {PnIntroductionComponent} from './introduction/pn-introduction.component';
import {PermissionUxComponent} from './permission-ux/permission-ux.component';
import {PrincipleOperationComponent} from './principle-operation/principle-operation.component';
import {SubscribingUserComponent} from './subscribing-user/subscribing-user.component';

@NgModule({
  imports: [
    CommonModule,
      AppCommonModule,
      FlexLayoutModule,
      MatCardModule,
    PushNotificationRoutingModule
  ],
  declarations: [
      PnIntroductionComponent,
      PermissionUxComponent,
      PrincipleOperationComponent,
      SubscribingUserComponent,
  ]
})
export class PushNotificationModule { }
