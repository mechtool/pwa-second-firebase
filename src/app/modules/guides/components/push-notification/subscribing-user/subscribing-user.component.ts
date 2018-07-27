import {Component, ElementRef, QueryList, ViewChildren} from "@angular/core";
import {CommunicationService, SideNavItem} from '../../../../../services/mainAppService';
import {QuerySelectorDirective} from '../../../../common/directives/query-selector/query-selector.directive';
@Component({
    selector : 'subscribing-user',
    styleUrls : ['./subscribing-user.component.css'],
    templateUrl : './subscribing-user.component.html',
})
export class SubscribingUserComponent{

    private localMenu : SideNavItem[] = [
	new SideNavItem({text:"Подписка пользователя", href:'/guides/push-notification/subscribing-user', fragment:'subscribingUser'}),
	new SideNavItem({text:"Регистрация сервисного рабочего",href: '/guides/push-notification/subscribing-user', fragment:'registerServiceWorker'}),
	new SideNavItem({text:"Запрос разрешения",href: '/guides/push-notification/subscribing-user', fragment:'permissionRequest'}),
	new SideNavItem({text:"Подписка пользователя",href: '/guides/push-notification/subscribing-user', fragment:'subscribeUser'}),
	new SideNavItem({text:"Серверный ключ", href:'/guides/push-notification/subscribing-user', fragment:'serverKey'}),
	new SideNavItem({text:"Разрешение и подписка", href:'/guides/push-notification/subscribing-user', fragment:'subscribeMethod'}),
	new SideNavItem({text:"Объект подписки", href:'/guides/push-notification/subscribing-user',fragment:'pushObject'}),
	new SideNavItem({text:"Передача объекта на сервер",href: '/guides/push-notification/subscribing-user', fragment:'sendSubscribeObject'}),
	new SideNavItem({text:"FAQ", href:'/guides/push-notification/subscribing-user',fragment:'faq'}),
    ];

    @ViewChildren(QuerySelectorDirective, {read: ElementRef}) private appAnchors: QueryList<ElementRef>;//обеспечение навигации по странице-обязателен для всех страниц, имеющих локальное меню

    constructor(private communication : CommunicationService){}

    ngAfterViewInit(){
        this.communication.sendResource({type : 'resource', appHeader : "Подписка пользователя", localData : { appAnchors : this.appAnchors, localMenu : this.localMenu}})
    }
}