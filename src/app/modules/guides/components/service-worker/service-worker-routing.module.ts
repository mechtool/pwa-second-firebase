import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServiceWorkerComponent} from './components/overview/service-worker.component';
import {SpeedUpComponent} from './components/speed-up/speed-up.component';
import {PerformanceLoadingComponent} from './components/performance-loading/performance-loading.component';
import {LifeCycleComponent} from './components/life-cyrcle/life-cycle.component';
import {RegistrationComponent} from './components/registration/registration.component';

const routes: Routes = [
    {path : 'overview', component : ServiceWorkerComponent, data : {type : 'service-worker'}},
    {path : 'speed-up', component : SpeedUpComponent, data : {type : 'speed-up'}},
    {path : 'performance', component : PerformanceLoadingComponent, data : {type : 'performance'}},
    {path : 'life-cycle', component : LifeCycleComponent, data : {type : 'life-cycle'}},
    {path : 'registration', component : RegistrationComponent, data : {type : 'registration'}},
    {path  : "" , pathMatch :"full", redirectTo : "overview"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceWorkerRoutingModule { }
