import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PnIntroductionComponent} from './introduction/pn-introduction.component';
import {PermissionUxComponent} from './permission-ux/permission-ux.component';
import {PrincipleOperationComponent} from './principle-operation/principle-operation.component';
import {SubscribingUserComponent} from './subscribing-user/subscribing-user.component';


const routes: Routes = [
    {path : 'introduction', component : PnIntroductionComponent, data : {type : 'introduction'}},
    {path : 'permission-ux', component : PermissionUxComponent, data : {type : 'permission-ux'}},
    {path : 'principle-operation', component : PrincipleOperationComponent, data : {type : 'principle-operation'}},
    {path : 'subscribing-user', component : SubscribingUserComponent, data : {type : 'subscribing-user'}},
    {path  : "" , pathMatch :"full", redirectTo : "introduction"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PushNotificationRoutingModule { }
