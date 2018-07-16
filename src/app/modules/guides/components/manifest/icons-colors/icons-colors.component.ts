import {Component, ElementRef, QueryList, ViewChildren} from "@angular/core";
import {QuerySelectorDirective} from "../../../../common/directives/query-selector/query-selector.directive";

@Component({
    selector : 'pwa-icons-colors',
    styleUrls : ['./icons-colors.component.css'],
    templateUrl : './icons-colors.component.html'
})
export class IconsColorsComponent{

    @ViewChildren(QuerySelectorDirective, {read : ElementRef}) private appAnchors : QueryList<ElementRef>;//обеспечение навигации по странице-обязателен для всех страниц, имеющих локальное меню

    constructor(){}
}