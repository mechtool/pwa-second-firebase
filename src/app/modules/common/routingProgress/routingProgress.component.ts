import { Component, AfterViewInit } from '@angular/core';
import {Router, NavigationStart, NavigationCancel, NavigationEnd} from '@angular/router';
@Component({
    selector : 'pwa-routing-progress',
    templateUrl : './routingProgress.component.html',
})
export class RoutingProgressComponent implements AfterViewInit{
    
    public visible : boolean;
    
    constructor(private router : Router){
        this.visible = true//true;
    }

    ngAfterViewInit(){
        this.router.events.subscribe((event) => {
            this.visible = (event instanceof NavigationStart) ? true : (event instanceof NavigationEnd || event instanceof NavigationCancel) ? false : this.visible;
        }
    )
    }
}