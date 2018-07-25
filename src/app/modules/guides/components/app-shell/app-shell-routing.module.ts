import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppShellComponent} from './app-shell.component';

const routes: Routes = [
    {path : '', component : AppShellComponent, data : {type : 'app-shell'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppShellRoutingModule { }
