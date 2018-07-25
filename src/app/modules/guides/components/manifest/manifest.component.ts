import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren,} from '@angular/core';
import {QuerySelectorDirective} from "../../../common/directives/query-selector/query-selector.directive";
import {CommunicationService, SideNavItem} from '../../../../services/mainAppService';

@Component({
    selector : 'pwa-manifest',
    styleUrls : ['./manifest.component.css'],
    templateUrl:'./manifest.component.html',
})
export class ManifestComponent implements AfterViewInit{

    @ViewChildren(QuerySelectorDirective, {read : ElementRef}) private appAnchors : QueryList<ElementRef>;//обеспечение навигации по странице-обязателен для всех страниц, имеющих локальное меню
    constructor(private communication : CommunicationService) { }

    private localMenu : SideNavItem[] =  [
        new SideNavItem({text : 'Манифест', href : '/guides/manifest', fragment : 'description'}),
        new SideNavItem({text : 'Применение и пример', href : '/guides/manifest', fragment : 'apply'}),
        new SideNavItem({text : 'Создание манифеста', href : '/guides/manifest', fragment : 'made-manifest'}),
        new SideNavItem({text : 'Свойства манифеста', href : '/guides/manifest', fragment : 'properties'}),
        new SideNavItem({text : 'Установка стартового адреса', href : '/guides/manifest',  fragment : 'startAddress'}),
        new SideNavItem({text : 'Настройка иконок', href : '/guides/manifest',  fragment : 'icons'}),
        new SideNavItem({text : 'Добавление заставки', href : '/guides/manifest',  fragment : 'splashScreen'}),
        new SideNavItem({text : 'Стиль запуска', href : '/guides/manifest',  fragment : 'startStyle'}),
        new SideNavItem({text : 'Установка темы', href : '/guides/manifest',  fragment : 'themeColor'}),
        new SideNavItem({text : 'Тестирование манифеста', href : '/guides/manifest',  fragment : 'manifestTest'}),
    ];

    ngAfterViewInit() {
        this.communication.sendResource({type : 'resource', appHeader : 'Манифест', localData : { appAnchors : this.appAnchors, localMenu : this.localMenu}})
    }

    
}