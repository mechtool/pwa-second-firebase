import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SamplesComponent} from './samples.component';
import {ForecastComponent} from './components/forecast/forecast.component';

const routes: Routes = [
    {path : 'forecast' , component : ForecastComponent, data : {type : 'forecast'}},
    {path : '', component : SamplesComponent, data : {type : 'samples'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplesRoutingModule { }
