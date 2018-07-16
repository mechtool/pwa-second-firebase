import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManifestComponent} from './manifest.component';
import { IconsColorsComponent } from './icons-colors/icons-colors.component';
import { InstallMessagesComponent } from './install-messages/install-messages';

const routes: Routes = [
    {path : '', component : ManifestComponent, data : {type : 'manifest'}},
    {path : 'icons-color', component : IconsColorsComponent, data : {type : 'icons-color'}},
    {path : 'install-messages', component : InstallMessagesComponent, data : {type : 'install-messages'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManifestRoutingModule { }
