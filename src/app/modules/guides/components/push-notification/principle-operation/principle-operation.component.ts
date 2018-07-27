import {Component, ElementRef, QueryList, ViewChildren} from "@angular/core";
import {CommunicationService, SideNavItem} from '../../../../../services/mainAppService';
import {QuerySelectorDirective} from '../../../../common/directives/query-selector/query-selector.directive';
@Component({
    selector : 'principle-operation',
    styleUrls : ['./principle-operation.component.css'],
    templateUrl : './principle-operation.component.html',
})
export class PrincipleOperationComponent{

    private localMenu : SideNavItem[] = [
	new SideNavItem({text:"Последовательность запуска",href: '/guides/push-notification/principle-operation', fragment:'howPushWorks'}),
	new SideNavItem({text:"Сторона клиента",href: '/guides/push-notification/principle-operation', fragment:'clientSide'}),
	new SideNavItem({text:"Отправка сообщения", href:'/guides/push-notification/principle-operation', fragment:'sendMessage'}),
	new SideNavItem({text:"Сервис уведомлений", href:'/guides/push-notification/principle-operation', fragment:'whatPushService'}),
	new SideNavItem({text:"Отправка на устройство", href:'/guides/push-notification/principle-operation', fragment:'sendDeviceMessage'}),
    ];
    @ViewChildren(QuerySelectorDirective, {read: ElementRef}) private appAnchors: QueryList<ElementRef>;//обеспечение навигации по странице-обязателен для всех страниц, имеющих локальное меню

    constructor(private communication : CommunicationService){}

    ngAfterViewInit(){
        this.communication.sendResource({type : 'resource', appHeader : 'Push последовательность', localData : { appAnchors : this.appAnchors, localMenu : this.localMenu}})
    }
}