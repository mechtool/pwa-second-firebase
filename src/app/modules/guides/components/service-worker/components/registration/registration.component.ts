import {Component, ElementRef, QueryList, ViewChildren} from "@angular/core";
import {CommunicationService, SideNavItem} from '../../../../../../services/mainAppService';
import {QuerySelectorDirective} from '../../../../../common/directives/query-selector/query-selector.directive';
@Component({
    selector : 'pwa-registration',
    styleUrls : ['./registration.component.css'],
    templateUrl : './registration.component.html'
})
export class RegistrationComponent {

    private localMenu: SideNavItem[] = [
        new SideNavItem({text :"Введение", href : '/guides/service-worker/registration', fragment:'common-template'}),
        new SideNavItem({text :"Общий подход", href :'/guides/service-worker/registration', fragment: 'common-template'}),
        new SideNavItem({text :"Первое посещение", href: '/guides/service-worker/registration', fragment:'first-visit'}),
        new SideNavItem({text  :"Совершенствуем шаблон", href: '/guides/service-worker/registration', fragment:'improving-boilerplate'}),
        new SideNavItem({text :"Последующие визиты",href: '/guides/service-worker/registration', fragment: 'subsequent-visits'}),
        new SideNavItem({text :"Тестирование", href:'/guides/service-worker/registration', fragment:'testing'}),
        new SideNavItem({text :"Итоги", href:'/guides/service-worker/registration', fragment:'conclusion'}),

    ];


    @ViewChildren(QuerySelectorDirective, {read: ElementRef}) private appAnchors: QueryList<ElementRef>;//обеспечение навигации по странице-обязателен для всех страниц, имеющих локальное меню

    constructor(private communication: CommunicationService) {}

    ngAfterViewInit() {
        this.communication.sendResource({
            type: 'resource',
            appHeader: 'Регистрация сервисного рабочего',
            localData: {appAnchors: this.appAnchors, localMenu: this.localMenu}
        })
    }
}