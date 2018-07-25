import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {QuerySelectorDirective} from "../../../common/directives/query-selector/query-selector.directive";
import {CommunicationService, SideNavItem} from '../../../../services/mainAppService';
@Component({
    selector : 'pwa-app-shell',
    styleUrls : ['./offline-cookbook.component.css'],
    templateUrl : './offline-cookbook.component.html'
})
export class OfflineCookbookComponent implements AfterViewInit{

    private localMenu : SideNavItem[] = [
        new SideNavItem({text : "Техники Offline", href :'/guides/offline-cookbook',  className :'zero', fragment : 'appShell'}),
        new SideNavItem({text : "Сохранение ресурсов", href : '/guides/offline-cookbook',   className :'zero', icon : 'remove', children : [
            new SideNavItem({text : "При установке", href : '/guides/offline-cookbook',   className :'first', fragment : 'onInstall'}),
            new SideNavItem({text : "Загрузке данных", href : '/guides/offline-cookbook',   className :'first', fragment : 'onStoreData'}),
            new SideNavItem({text : "При активации", href : '/guides/offline-cookbook',   className :'first', fragment : 'onActivation'}),
            new SideNavItem({text : "Активности", href : '/guides/offline-cookbook',   className :'first', fragment : 'onActivity'}),
            new SideNavItem({text : "При запросе", href:'/guides/offline-cookbook',   className :'first', fragment : 'onWebRequest'}),
            new SideNavItem({text : "При обновлении кэша", href : '/guides/offline-cookbook',   className :'first', fragment : 'onRefreshCache'}),
            new SideNavItem({text :"При оповещениях", href : '/guides/offline-cookbook',   className :'first', fragment :'incoming'}),
            new SideNavItem({text :"При синхронизации", href : '/guides/offline-cookbook',   className :'first', fragment :'background'}),
        ], fragment :'resourceStore'}),
        new SideNavItem({text :"Сохранность кэша", href:'/guides/offline-cookbook', className :'zero', fragment:'persistence'}),
        new SideNavItem({text : "Стратегии кэширования", href:'/guides/offline-cookbook', className :'zero', icon : 'remove', children: [
            new SideNavItem({text :"Только кэш", href: '/guides/offline-cookbook',   className :'first', fragment:'cacheOnly'}),
            new SideNavItem({text :"Только сеть",href: '/guides/offline-cookbook',   className :'first', fragment:'webOnly'}),
            new SideNavItem({text:"Сначала кэш", href:'/guides/offline-cookbook',   className :'first', fragment:'cacheFirst'}),
            new SideNavItem({text:"Сначала сеть", href:'/guides/offline-cookbook',   className :'first', fragment:'webFirst'}),
            new SideNavItem({text:"Кэш или сеть", href:'/guides/offline-cookbook',   className :'first', fragment:'cacheOrWeb'}),
            new SideNavItem({text:"Кэш, потом сеть", href:'/guides/offline-cookbook', fragment:'cacheThenWeb'}),
            new SideNavItem({text:"Общий резерв", href:'/guides/offline-cookbook',   className :'first', fragment:'generic'}),
            new SideNavItem({text:"Шаблонизация", href:'/guides/offline-cookbook',   className :'first', fragment:'templating'}),
        ], fragment : 'strategy'}),



    ];
    @ViewChildren(QuerySelectorDirective, {read : ElementRef}) private appAnchors : QueryList<ElementRef>;//обеспечение навигации по странице-обязателен для всех страниц, имеющих локальное меню

    constructor(private communication : CommunicationService){}
    ngAfterViewInit(){
        this.communication.sendResource({type : 'resource', appHeader : 'Техника Offline', localData : { appAnchors : this.appAnchors, localMenu : this.localMenu}})
    }

}