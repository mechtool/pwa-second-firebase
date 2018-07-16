import {Component, ElementRef, QueryList, ViewChildren} from "@angular/core";
import {QuerySelectorDirective} from "../../../../common/directives/query-selector/query-selector.directive";

@Component ({
    selector : 'pwa-install-messages',
    styleUrls : ['./install-messages.css'],
    templateUrl : './install-messages.html',
})
export class InstallMessagesComponent{

    @ViewChildren(QuerySelectorDirective, {read : ElementRef}) private appAnchors : QueryList<ElementRef>;//обеспечение навигации по странице-обязателен для всех страниц, имеющих локальное меню

}