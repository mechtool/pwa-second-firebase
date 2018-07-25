import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {CommunicationService, SideNavItem} from '../../../../../../services/mainAppService';
import {QuerySelectorDirective} from '../../../../../common/directives/query-selector/query-selector.directive';
@Component({
    selector : 'pwa-service-worker',
    styleUrls : ['./service-worker.component.css'],
    templateUrl : './service-worker.component.html'
})
export class ServiceWorkerComponent implements AfterViewInit{

    private localMenu : SideNavItem[] = [
        new SideNavItem({text :"Описание", href : '/guides/service-worker', fragment: 'introduction'}),
        new SideNavItem({text : "Жизненный цикл", href : '/guides/service-worker', fragment:'life-circle'}),
        new SideNavItem({text : "Ввод в браузер", href:'/guides/service-worker',fragment:'browser-enter'}),
        new SideNavItem({text : "Причины отказов", href : '/guides/service-worker', fragment :'failures'}),
        new SideNavItem({text : "Установка, активация, кэширование", href : '/guides/service-worker', fragment :'install-active-cache'}),
        new SideNavItem({text :"Сетевые запросы", href : '/guides/service-worker', fragment:'responses'}),
        new SideNavItem({text : "Восстановление запросов", href : '/guides/service-worker', fragment :'recover-response'}),
        new SideNavItem({text : "Преднастройка .fetch()", href : '/guides/service-worker', fragment :'pre-sittings'}),
        new SideNavItem({text  : "Обработка изображений", href : '/guides/service-worker', fragment :'processing-images'}),
        new SideNavItem({text : "Обновление рабочего", href :'/guides/service-worker', fragment:'update-service-worker'}),
        new SideNavItem({text : "Удаление старых кэшей", href : '/guides/service-worker', fragment:'delete-old-cache'}),
        new SideNavItem({text:"Инструменты отладки", href:'/guides/service-worker', fragment :'tools'})

    ];

    @ViewChildren(QuerySelectorDirective, {read : ElementRef}) private appAnchors : QueryList<ElementRef>;//обеспечение навигации по странице-обязателен для всех страниц, имеющих локальное меню

    constructor(private communication : CommunicationService){}
    ngAfterViewInit(){
        this.communication.sendResource({type : 'resource', appHeader : 'Техника Offline', localData : { appAnchors : this.appAnchors, localMenu : this.localMenu}})
    }
}