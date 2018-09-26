import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CommunicationService, SideNavItem} from '../../../../../services/mainAppService';
import {QuerySelectorDirective} from '../../../../common/directives/query-selector/query-selector.directive';

@Component({
  selector: 'pwa-push-libraries',
  templateUrl: './push-libraries.component.html',
  styleUrls: ['./push-libraries.component.css']
})
export class PushLibrariesComponent implements AfterViewInit {

    private localMenu : SideNavItem[] = [
        new SideNavItem({text:"Использование библиотеки",href: '/guides/push-notification/push-libraries', fragment:'webPushSendLibrary'}),
        new SideNavItem({text:"Сохранение объекта подписки",href: '/guides/push-notification/push-libraries', fragment:'saveSubscription'}),
        new SideNavItem({text:"Отправка сообщения", href:'/guides/push-notification/push-libraries', fragment:'sendPush'})
    ];
    @ViewChildren(QuerySelectorDirective, {read: ElementRef}) private appAnchors: QueryList<ElementRef>;//обеспечение навигации по странице-обязателен для всех страниц, имеющих локальное меню

    constructor(private communication : CommunicationService){}

    ngAfterViewInit(){
        this.communication.sendResource({type : 'resource', appHeader : 'Использование библиотеки', localData : { appAnchors : this.appAnchors, localMenu : this.localMenu}})
    }

}
