//----------------------modules-----------------------------------
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { AppCommonModule } from './modules/common/app-common.module';

//-------------------material--------------------------------------
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule, MatToolbarModule, MatSidenavModule, MatTooltipModule, MatButtonModule, MatCardModule} from '@angular/material';

//----------------------app components---------------------------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommunicationService, RouterService} from './services/mainAppService';


@NgModule({
    declarations: [
    AppComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,
        AppCommonModule,
        BrowserAnimationsModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        AppRoutingModule,

        //-------------material------------------------------------
        FlexLayoutModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        MatTooltipModule,
        MatCardModule,
    ],
    providers: [
        CommunicationService,
        RouterService
        ],
    bootstrap: [AppComponent]
})
export class AppModule { }
