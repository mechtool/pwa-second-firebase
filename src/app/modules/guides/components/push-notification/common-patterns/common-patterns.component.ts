import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {CommunicationService, SideNavItem} from '../../../../../services/mainAppService';
import {QuerySelectorDirective} from '../../../../common/directives/query-selector/query-selector.directive';

@Component({
  selector: 'pwa-common-patterns',
  templateUrl: './common-patterns.component.html',
  styleUrls: ['./common-patterns.component.css']
})
export class CommonPatternsComponent implements AfterViewInit {


    private localMenu : SideNavItem[] = [
        new SideNavItem({text:"Поведение оповещения",href: '/guides/push-notification/notification-behavior', fragment:'notification-behavior'}),
        new SideNavItem({text:"Actions (действия)",href: '/guides/push-notification/notification-behavior', fragment:'Actions'}),
        new SideNavItem({text:"Tag (тег)",href: '/guides/push-notification/notification-behavior', fragment:'Tag'}),
        new SideNavItem({text:"Renotify (сигнализировать)",href: '/guides/push-notification/notification-behavior', fragment:'Renotify'}),
        new SideNavItem({text:"Silent (не сигнализировать)",href: '/guides/push-notification/notification-behavior', fragment:'Silent'}),
        new SideNavItem({text:"Необходимость взаимодействия",href: '/guides/push-notification/notification-behavior', fragment:'requireInteraction'}),

    ];
    @ViewChildren(QuerySelectorDirective, {read: ElementRef}) private appAnchors: QueryList<ElementRef>;//обеспечение навигации по странице-обязателен для всех страниц, имеющих локальное меню

    constructor(private communication : CommunicationService){}

    ngAfterViewInit(){
        this.communication.sendResource({type : 'resource', appHeader : 'Общие шаблоны уведомлений', localData : { appAnchors : this.appAnchors, localMenu : this.localMenu}})
    }

}
