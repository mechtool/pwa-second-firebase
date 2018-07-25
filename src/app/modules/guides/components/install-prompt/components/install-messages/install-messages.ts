import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {QuerySelectorDirective} from "../../../../../common/directives/query-selector/query-selector.directive";
import {CommunicationService, SideNavItem} from '../../../../../../services/mainAppService';

@Component ({
    selector : 'pwa-install-messages',
    styleUrls : ['./install-messages.css'],
    templateUrl : './install-messages.html',
})
export class InstallMessagesComponent implements AfterViewInit{

    @ViewChildren(QuerySelectorDirective, {read : ElementRef}) private appAnchors : QueryList<ElementRef>;//обеспечение навигации по странице-обязателен для всех страниц, имеющих локальное меню
    constructor(private communication : CommunicationService) { }

    private localMenu : SideNavItem[] =  [
        new SideNavItem({text : 'Диалоги установки', href : '/guides/install-prompt/install-messages', fragment : 'installBanners'}),
        new SideNavItem({text : 'Установка на экран (web)', href : '/guides/install-prompt/install-messages', fragment : 'install-web'}),
        new SideNavItem({text : 'Отображения диалога установки', href : '/guides/install-prompt/install-messages', fragment : 'show-dialog-block'}),
        new SideNavItem({text : 'Подписка на событие отображения', href : '/guides/install-prompt/install-messages',  fragment : 'add-event'}),
        new SideNavItem({text : 'Оповещение пользователя', href : '/guides/install-prompt/install-messages',  fragment : 'prompt-user'}),
        new SideNavItem({text : 'Метод вызова диалога', href : '/guides/install-prompt/install-messages',  fragment : 'show-dialog-method'}),
        new SideNavItem({text : 'Определение удачной установки', href : '/guides/install-prompt/install-messages',  fragment : 'install-success'}),
        new SideNavItem({text : 'Определение запуска приложения', href : '/guides/install-prompt/install-messages',  fragment : 'app-start'}),
        new SideNavItem({text : 'Обновление иконок и имени', href : '/guides/install-prompt/install-messages',  fragment : 'update-icons'}),
        new SideNavItem({text : 'Тестирование добавление иконки', href : '/guides/install-prompt/install-messages',  fragment : 'test-adding'}),
        new SideNavItem({text : 'Нативный диалог установки', href : '/guides/install-prompt/install-messages',  fragment : 'native-prompt'}),
        new SideNavItem({text : 'Обязательные свойства манифеста', href : '/guides/install-prompt/install-messages',  fragment : 'required-properties'}),
    ];

    ngAfterViewInit() {
        this.communication.sendResource({type : 'resource', appHeader : 'Диалоги установки', localData : { appAnchors : this.appAnchors, localMenu : this.localMenu}})
    }

}