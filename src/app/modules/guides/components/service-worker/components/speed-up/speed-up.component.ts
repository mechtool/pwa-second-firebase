import {Component, ElementRef, QueryList, ViewChildren} from "@angular/core";
import {CommunicationService, SideNavItem} from '../../../../../../services/mainAppService';
import {QuerySelectorDirective} from '../../../../../common/directives/query-selector/query-selector.directive';
@Component({
    selector : 'pwa-speed-up',
    styleUrls : ['./speed-up.component.css'],
    templateUrl : './speed-up.component.html'
})
export class SpeedUpComponent {
    private localMenu: SideNavItem[] = [
        new SideNavItem({text :"Ускорение рабочего", href :  '/guides/service-worker/speed-up', fragment :'introduction'}),
        new SideNavItem({text :"Предзагрузки навигаций", href: '/guides/service-worker/speed-up', fragment : 'navigation-preload'}),
        new SideNavItem({text :"Использование предзагрузок", href:'/guides/service-worker/speed-up', fragment:'using-preload'}),
        new SideNavItem({text :"Настройка предзагрузок", href: '/guides/service-worker/speed-up', fragment: 'custom-preload'}),
        new SideNavItem({text :"Изменение заголовка", href :'/guides/service-worker/speed-up', fragment : 'change-header'}),
    ];

    @ViewChildren(QuerySelectorDirective, {read: ElementRef}) private appAnchors: QueryList<ElementRef>;//обеспечение навигации по странице-обязателен для всех страниц, имеющих локальное меню

    constructor(private communication: CommunicationService) {}

    ngAfterViewInit() {
        this.communication.sendResource({
            type: 'resource',
            appHeader: 'Ускорение навигации',
            localData: {appAnchors: this.appAnchors, localMenu: this.localMenu}
        })
    }
}