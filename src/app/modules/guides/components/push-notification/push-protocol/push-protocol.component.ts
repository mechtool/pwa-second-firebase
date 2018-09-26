import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {CommunicationService, SideNavItem} from '../../../../../services/mainAppService';
import {QuerySelectorDirective} from '../../../../common/directives/query-selector/query-selector.directive';

@Component({
  selector: 'pwa-push-protocol',
  templateUrl: './push-protocol.component.html',
  styleUrls: ['./push-protocol.component.css']
})
export class PushProtocolComponent implements AfterViewInit {

    private localMenu : SideNavItem[] = [
        new SideNavItem({text:"Web Push протокол",href: '/guides/push-notification/push-protocol', fragment:'webPushProtocol'}),
        new SideNavItem({text:"Серверный ключ",href: '/guides/push-notification/push-protocol', fragment:'appKeys'}),
        new SideNavItem({text:"JSON WEB TOKEN", href:'/guides/push-notification/push-protocol', fragment:'jwtToken'}),
        new SideNavItem({text:"Кодирование сообщения", href:'/guides/push-notification/push-protocol', fragment:'payload-encryption'}),
        new SideNavItem({text:"ECDH", href:'/guides/push-notification/push-protocol', fragment:'ECDH'}),
        new SideNavItem({text:"ECDF", href:'/guides/push-notification/push-protocol', fragment:'ECDF'}),
        new SideNavItem({text:"Данные", href:'/guides/push-notification/push-protocol', fragment:'inputs'}),
        new SideNavItem({text:"Дополнительные заголовки", href:'/guides/push-notification/push-protocol', fragment:'extra-headers'}),
        new SideNavItem({text:"Все вместе", href:'/guides/push-notification/push-protocol', fragment:'everything-together'}),
        new SideNavItem({text:"Коды ответов сервиса", href:'/guides/push-notification/push-protocol', fragment:'answer-codes'}),

    ];
    @ViewChildren(QuerySelectorDirective, {read: ElementRef}) private appAnchors: QueryList<ElementRef>;//обеспечение навигации по странице-обязателен для всех страниц, имеющих локальное меню

    constructor(private communication : CommunicationService){}

    ngAfterViewInit(){
        this.communication.sendResource({type : 'resource', appHeader : 'Web Push протокол', localData : { appAnchors : this.appAnchors, localMenu : this.localMenu}})
    }

}
