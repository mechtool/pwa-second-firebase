import {Component, ElementRef, QueryList, ViewChildren} from "@angular/core";
import {QuerySelectorDirective} from "../../../common/directives/query-selector/query-selector.directive";
import {CommunicationService, SideNavItem} from '../../../../services/mainAppService';

@Component({
    selector : 'pwa-app-shell',
    styleUrls : ['./app-shell.component.css'],
    templateUrl : './app-shell.component.html'
})
export class AppShellComponent{
    private localMenu : SideNavItem[] = [
        new SideNavItem({text : "Описание", href : '/guides/app-shell', fragment :'appShell'}),
        new SideNavItem({text :"Преимущества", href : '/guides/app-shell', fragment : 'advantages'}),
        new SideNavItem({text : "Требования", href : '/guides/app-shell', fragment : 'requirements'}),
        new SideNavItem({text : "Создание оболочки", href : '/guides/app-shell', fragment : 'createAppShell'}),
        new SideNavItem({ text : "Кэширование оболочки", href : '/guides/app-shell', fragment :'appShellCache'})

    ];
    @ViewChildren(QuerySelectorDirective, {read : ElementRef}) private appAnchors : QueryList<ElementRef>;//обеспечение навигации по странице-обязателен для всех страниц, имеющих локальное меню

    constructor(private communication : CommunicationService){}
    ngAfterViewInit() {
        this.communication.sendResource({type : 'resource', appHeader : 'Оболочка приложения', localData : { appAnchors : this.appAnchors, localMenu : this.localMenu}})
    }

}