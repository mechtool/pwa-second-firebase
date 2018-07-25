import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GuidesComponent} from './guides.component';

const routes: Routes = [
    {path : 'manifest', loadChildren : './components/manifest/manifest.module#ManifestModule'},
    {path : 'install-prompt', loadChildren : './components/install-prompt/install-prompt.module#InstallPromptModule'},
    {path : 'app-shell', loadChildren : './components/app-shell/app-shell.module#AppShellModule'},
    {path : 'offline-cookbook', loadChildren : './components/offline-cookbook/offline-cookbook.module#OfflineCookbookModule'},
    {path : 'service-worker', loadChildren : './components/service-worker/service-worker.module#ServiceWorkerModule'},
    {path : '', component : GuidesComponent , data : {type : 'guides'}},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidesRoutingModule { }
