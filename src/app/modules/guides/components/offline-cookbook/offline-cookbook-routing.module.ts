import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OfflineCookbookComponent} from './offline-cookbook.component';

const routes: Routes = [
    {path : '', component : OfflineCookbookComponent, data : {type : 'offline-cookbook'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfflineCookbookRoutingModule { }
