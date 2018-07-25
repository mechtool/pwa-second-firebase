import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {QuerySelectorDirective} from "../../../../../common/directives/query-selector/query-selector.directive";
import {CommunicationService, SideNavItem} from '../../../../../../services/mainAppService';

@Component({
    selector : 'pwa-icons-colors',
    styleUrls : ['./icons-colors.component.css'],
    templateUrl : './icons-colors.component.html'
})
export class IconsColorsComponent implements AfterViewInit{

    @ViewChildren(QuerySelectorDirective, {read : ElementRef}) private appAnchors : QueryList<ElementRef>;//обеспечение навигации по странице-обязателен для всех страниц, имеющих локальное меню
    constructor(private communication : CommunicationService) { };

    private localMenu : SideNavItem[] =  [
        new SideNavItem({text : 'Иконки и цвета', href : '/guides/install-prompt/icons-colors', fragment : 'icons-buttons'}),
        new SideNavItem({text : 'Установка на экран (web)', href : '/guides/install-prompt/icons-colors', fragment : 'chrome-opera'}),
        new SideNavItem({text : 'Отображения диалога установки', href : '/guides/install-prompt/icons-colors', fragment : 'safari'}),
        new SideNavItem({text : 'Подписка на событие отображения', href : '/guides/install-prompt/icons-colors',  fragment : 'ei-wp'}),
        new SideNavItem({text : 'Оповещение пользователя', href : '/guides/install-prompt/icons-colors',  fragment : 'colorItems'}),
        new SideNavItem({text : 'Метод вызова диалога', href : '/guides/install-prompt/icons-colors',  fragment : 'changeAppearance'}),
    ];

    ngAfterViewInit() {
        this.communication.sendResource({type : 'resource', appHeader : 'Иконки и цвета', localData : { appAnchors : this.appAnchors, localMenu : this.localMenu}})
    }

}