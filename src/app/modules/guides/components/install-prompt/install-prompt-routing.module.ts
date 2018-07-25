import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IconsColorsComponent} from './components/icons-colors/icons-colors.component';
import {InstallMessagesComponent} from './components/install-messages/install-messages';

const routes: Routes = [
    {path : 'icons-colors', component : IconsColorsComponent, data : {type : 'icons-colors'}},
    {path : 'install-messages', component : InstallMessagesComponent, data : {type : 'install-messages'}},
    {path : '', redirectTo : 'install-messages', pathMatch : 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstallPromptRoutingModule { }
