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
        new SideNavItem({text:"Общие шаблоны оповещений",href: '/guides/push-notification/common-patterns', fragment:'commonTemplates'}),
        new SideNavItem({text:"Событие закрытия уведомления",href: '/guides/push-notification/common-patterns', fragment: 'notificationclose'}),
        new SideNavItem({text:"Добавление данных",href: '/guides/push-notification/common-patterns', fragment:'AddingData'}),
        new SideNavItem({text:"Открытие окна",href: '/guides/push-notification/common-patterns', fragment:'openWindow'}),
        new SideNavItem({text:"Фокус на окно",href: '/guides/push-notification/common-patterns', fragment:'focusExWindow'}),
        new SideNavItem({text:"Объединение оповещений",href: '/guides/push-notification/common-patterns', fragment:'mergingNotifications'}),
        new SideNavItem({text:"Исключение из правил",href: '/guides/push-notification/common-patterns', fragment:'exceptionRule'}),
        new SideNavItem({text:"Сообщение окну",href: '/guides/push-notification/common-patterns', fragment:'messagePage'}),

    ];
    @ViewChildren(QuerySelectorDirective, {read: ElementRef}) private appAnchors: QueryList<ElementRef>;//обеспечение навигации по странице-обязателен для всех страниц, имеющих локальное меню

    constructor(private communication : CommunicationService){}

    ngAfterViewInit(){
        this.communication.sendResource({type : 'resource', appHeader : 'Общие програмные шаблоны оповещений', localData : { appAnchors : this.appAnchors, localMenu : this.localMenu}})
    }

}
