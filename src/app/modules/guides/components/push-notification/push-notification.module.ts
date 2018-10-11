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
import { PushLibrariesComponent } from './push-libraries/push-libraries.component';
import { PushProtocolComponent } from './push-protocol/push-protocol.component';
import { PushEventsComponent } from './push-events/push-events.component';
import { NotificationBehaviorComponent } from './notification-behavior/notification-behavior.component';
import { CommonPatternsComponent } from './common-patterns/common-patterns.component';

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
      PushLibrariesComponent,
      PushProtocolComponent,
      PushEventsComponent,
      NotificationBehaviorComponent,
      CommonPatternsComponent,
  ]
})
export class PushNotificationModule { }
