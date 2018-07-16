import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GuidesComponent} from './guides.component';

const routes: Routes = [
    {path : '', component : GuidesComponent , data : {type : 'guides'}},
    {path : 'manifest', loadChildren : './components/manifest/manifest.module#ManifestModule'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidesRoutingModule { }
