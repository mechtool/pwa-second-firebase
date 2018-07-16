import {Component, ElementRef, QueryList, ViewChildren} from "@angular/core";
import {QuerySelectorDirective} from "../../../common/directives/query-selector/query-selector.directive";
@Component({
    selector : 'pwa-manifest',
    styleUrls : ['./manifest.component.css'],
    templateUrl:'./manifest.component.html',
})
export class ManifestComponent{
    @ViewChildren(QuerySelectorDirective, {read : ElementRef}) private appAnchors : QueryList<ElementRef>;//обеспечение навигации по странице-обязателен для всех страниц, имеющих локальное меню

    
}