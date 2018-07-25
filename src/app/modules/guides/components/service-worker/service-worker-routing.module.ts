import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServiceWorkerComponent} from './components/overview/service-worker.component';

const routes: Routes = [
    {path : 'service-worker', component : ServiceWorkerComponent},
    {path : '', pathMatch : 'full', redirectTo : 'service-worker'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceWorkerRoutingModule { }
