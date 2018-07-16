import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//------------------material------------------------------
import {FlexLayoutModule} from '@angular/flex-layout';
import {
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule
} from '@angular/material';

//--------------components------------------------------
import { GridTemplateComponent } from './grid-template/grid-template.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StartPageComponent } from './start-page/start-page.component';
import { ApiTableTemplateComponent } from './api-table-template/api-table-template.component';
import { RoutingProgressComponent } from './routingProgress/routingProgress.component';
import { ExampleCodeTemplateComponent } from './exampleCodeTemplate/exampleCodeTemplate.component';
//-------------------directives------------------------------------------
import { QuerySelectorDirective } from './directives/query-selector/query-selector.directive';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        //---------material------------------------
        FlexLayoutModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatTooltipModule,
        MatButtonModule,
        MatCardModule,
        MatProgressBarModule,
    ],
    declarations: [
        GridTemplateComponent,
        SidenavComponent,
        StartPageComponent,
        ApiTableTemplateComponent,
        RoutingProgressComponent,
        ExampleCodeTemplateComponent,
        //-------------directives------------------
        QuerySelectorDirective
    ],
    exports : [
        GridTemplateComponent,
        SidenavComponent,
        StartPageComponent,
        ApiTableTemplateComponent,
        RoutingProgressComponent,
        ExampleCodeTemplateComponent,
        //------------directives-------------------
        QuerySelectorDirective
    ],
})
export class AppCommonModule { }
