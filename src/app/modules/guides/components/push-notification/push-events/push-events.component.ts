import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {CommunicationService, SideNavItem} from '../../../../../services/mainAppService';
import {QuerySelectorDirective} from '../../../../common/directives/query-selector/query-selector.directive';

@Component({
  selector: 'pwa-push-events',
  templateUrl: './push-events.component.html',
  styleUrls: ['./push-events.component.css']
})
export class PushEventsComponent implements AfterViewInit {

    private localMenu : SideNavItem[] = [
        new SideNavItem({text:"Событие Push",href: '/guides/push-notification/push-events', fragment:'pushEvent'}),
        new SideNavItem({text:"waitUntil()",href: '/guides/push-notification/push-events', fragment:'waitUntil'}),

    ];
    @ViewChildren(QuerySelectorDirective, {read: ElementRef}) private appAnchors: QueryList<ElementRef>;//обеспечение навигации по странице-обязателен для всех страниц, имеющих локальное меню

    constructor(private communication : CommunicationService){}

    ngAfterViewInit(){
        this.communication.sendResource({type : 'resource', appHeader : 'Событие Push', localData : { appAnchors : this.appAnchors, localMenu : this.localMenu}})
    }
}
