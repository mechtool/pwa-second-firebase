import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManifestComponent} from './manifest.component';

const routes: Routes = [
    {path : '', component : ManifestComponent, data : {type : 'manifest'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManifestRoutingModule { }
