import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {CommunicationService, SideNavItem} from '../../../../../../services/mainAppService';
import {QuerySelectorDirective} from '../../../../../common/directives/query-selector/query-selector.directive';
@Component({
    selector : 'pwa-life-cycle',
    styleUrls : ['./life-cycle.component.css'],
    templateUrl : './life-cycle.component.html'
})
export class LifeCycleComponent implements AfterViewInit{

    private localMenu: SideNavItem[] = [
        new SideNavItem({text : "Жизненный цикл", href : '/guides/service-worker/life-cycle', className :'zero', icon : 'remove', children: [
            new SideNavItem({text : "Первый сервисный рабочий", href :'/guides/service-worker/life-cycle', className :'first', fragment:'first-service-worker'}),
            new SideNavItem({text : "Контекст и управление", className :'first',href:'/guides/service-worker/life-cycle', fragment:'scope-control'}),
            new SideNavItem({text :"Загрузка, анализ, управление", className :'first', href : '/guides/service-worker/life-cycle', fragment:'download-parse'}),
            new SideNavItem({text :"Установка", className :'first', href : '/guides/service-worker/life-cycle', fragment:'first-install'}),
            new SideNavItem({text :"Активация", className :'first', href : '/guides/service-worker/life-cycle', fragment:'first-activate'}),
        ], fragment : 'life-circle'}),
        new SideNavItem({text : "Обновление рабочего", href : '/guides/service-worker/life-cycle', className :'zero', icon : 'remove', children:[
            new SideNavItem({text : "Установка", href: '/guides/service-worker/life-cycle', className :'first', fragment:'updating-install'}),
            new SideNavItem({text :"Ожидание", href:'/guides/service-worker/life-cycle', className :'first', fragment:'updating-waiting'}),
            new SideNavItem({text : "Активация", href : '/guides/service-worker/life-cycle', className :'first', fragment :'updating-activate'}),
            new SideNavItem({text :"Пропуск ожидания", href:'/guides/service-worker/life-cycle', className :'first', fragment:'skip-waiting'}),
            new SideNavItem({text : "Ручное обновление", href:'/guides/service-worker/life-cycle', className :'first', fragment:'manual-updates'}),

        ], fragment: 'updating'}),
        new SideNavItem({text :"Облегчаем разработку", href:'/guides/service-worker/life-cycle', className :'first', fragment :'development'}),
        new SideNavItem({text : "Обработка обновлений",href : '/guides/service-worker/life-cycle', fragment: 'handling-updates'}),
    ];

    @ViewChildren(QuerySelectorDirective, {read: ElementRef}) private appAnchors: QueryList<ElementRef>;//обеспечение навигации по странице-обязателен для всех страниц, имеющих локальное меню

    constructor(private communication : CommunicationService){}
    ngAfterViewInit(){
        this.communication.sendResource({type : 'resource', appHeader : 'Техника Offline', localData : { appAnchors : this.appAnchors, localMenu : this.localMenu}})
    }
}