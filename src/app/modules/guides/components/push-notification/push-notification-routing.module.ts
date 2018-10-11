import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PnIntroductionComponent} from './introduction/pn-introduction.component';
import {PermissionUxComponent} from './permission-ux/permission-ux.component';
import {PrincipleOperationComponent} from './principle-operation/principle-operation.component';
import {SubscribingUserComponent} from './subscribing-user/subscribing-user.component';
import {PushLibrariesComponent} from './push-libraries/push-libraries.component';
import {PushProtocolComponent} from './push-protocol/push-protocol.component';
import {PushEventsComponent} from './push-events/push-events.component';
import {NotificationBehaviorComponent} from './notification-behavior/notification-behavior.component';
import {CommonPatternsComponent} from './common-patterns/common-patterns.component';


const routes: Routes = [
    {path : 'introduction', component : PnIntroductionComponent, data : {type : 'introduction'}},
    {path : 'permission-ux', component : PermissionUxComponent, data : {type : 'permission-ux'}},
    {path : 'principle-operation', component : PrincipleOperationComponent, data : {type : 'principle-operation'}},
    {path : 'subscribing-user', component : SubscribingUserComponent, data : {type : 'subscribing-user'}},
    {path : 'push-libraries', component : PushLibrariesComponent, data : {type : 'push-libraries'}},
    {path : 'push-protocol', component : PushProtocolComponent, data : {type : 'push-protocol'}},
    {path : 'push-events', component : PushEventsComponent, data : {type : 'push-events'}},
    {path : 'notification-behavior', component : NotificationBehaviorComponent, data : {type : 'notification-behavior'}},
    {path : 'common-patterns', component : CommonPatternsComponent, data : {type : 'common-patterns'}},
    {path  : "" , pathMatch :"full", redirectTo : "introduction"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PushNotificationRoutingModule { }
