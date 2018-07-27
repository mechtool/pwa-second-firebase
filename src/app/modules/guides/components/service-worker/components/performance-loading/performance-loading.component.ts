import {Component, ElementRef, QueryList, ViewChildren} from "@angular/core";
import {CommunicationService, SideNavItem} from '../../../../../../services/mainAppService';
import {QuerySelectorDirective} from '../../../../../common/directives/query-selector/query-selector.directive';
@Component({
    selector : 'pwa-speed-up',
    styleUrls : ['./performance-loading.component.css'],
    templateUrl : './performance-loading.component.html'
})
export class PerformanceLoadingComponent {
    private localMenu: SideNavItem[] = [
        new SideNavItem({text : "Производительная загрузка", href : '/guides/service-worker/performance',fragment:'introduction'}),
        new SideNavItem({text :"Навигационные запросы", href:'/guides/service-worker/performance', fragment:'navigation-request'}),
        new SideNavItem({text : "Лутшая производительность", href:'/guides/service-worker/performance', className : 'zero', icon:'remove', children: [
            new SideNavItem({text: "Поточность ответов", href : '/guides/service-worker/performance', className: 'first', fragment:'streaming-responses'}),
            new SideNavItem({text :"Кэширование статики", href:'/guides/service-worker/performance', className:'first', fragment:'caching-static'}),
            new SideNavItem({text : "Использование оболочки", href : '/guides/service-worker/performance', className : 'first', fragment: 'using-app-shell'}),
        ], fragment:'best-performans'}),

        new SideNavItem({text :"Подводные камни", href :'/guides/service-worker/performance', fragment: 'performans-gotchas'}),


    ];

    @ViewChildren(QuerySelectorDirective, {read: ElementRef}) private appAnchors: QueryList<ElementRef>;//обеспечение навигации по странице-обязателен для всех страниц, имеющих локальное меню

    constructor(private communication: CommunicationService) {}

    ngAfterViewInit() {
        this.communication.sendResource({
            type: 'resource',
            appHeader: 'Техника Offline',
            localData: {appAnchors: this.appAnchors, localMenu: this.localMenu}
        })
    }
}