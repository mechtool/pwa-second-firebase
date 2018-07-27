import {Component, ElementRef, QueryList, ViewChildren} from "@angular/core";
import {CommunicationService, SideNavItem} from '../../../../../services/mainAppService';
import {QuerySelectorDirective} from '../../../../common/directives/query-selector/query-selector.directive';
@Component({
    selector : 'permission-ux',
    styleUrls : ['./permission-ux.component.css'],
    templateUrl : './permission-ux.component.html',
})
export class PermissionUxComponent{

    private localMenu : SideNavItem[] = [
	new SideNavItem({text:"Введение", href:'/guides/push-notification/permission-ux', fragment:'intro'}),
	new SideNavItem({text:"Общие подходы",href:'/guides/push-notification/permission-ux', fragment:'commonPatterns'}),
	new SideNavItem({text:"Своевременное предложение", href:'/guides/push-notification/permission-ux', fragment:'valueProposition'}),
	new SideNavItem({text:"Двойное разрешение", href:'/guides/push-notification/permission-ux', fragment:'doublePermission'}),
	new SideNavItem({text:"Панель настроек",href:'/guides/push-notification/permission-ux', fragment:'settingPanel'}),
	new SideNavItem({text:"Пассивный подход", href:'/guides/push-notification/permission-ux', fragment:'passiveApproach'}),
	new SideNavItem({text:"Плохой подход", href:'/guides/push-notification/permission-ux', fragment:'badUx'}),
    ];

    @ViewChildren(QuerySelectorDirective, {read: ElementRef}) private appAnchors: QueryList<ElementRef>;//обеспечение навигации по странице-обязателен для всех страниц, имеющих локальное меню

    constructor(private communication : CommunicationService){}

    ngAfterViewInit(){
        this.communication.sendResource({type : 'resource', appHeader : 'Пользовательские разрешения', localData : { appAnchors : this.appAnchors, localMenu : this.localMenu}})
    }
}