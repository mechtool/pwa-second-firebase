import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './modules/common/start-page/start-page.component';

const routes: Routes = [
    {path : 'guides', loadChildren : './modules/guides/guides.module#GuidesModule'},
    {path : 'samples', loadChildren : './modules/samples/samples.module#SamplesModule'},
    {path : 'start-page', component : StartPageComponent},
    {path : '', redirectTo : 'start-page', pathMatch : 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
