import {Component, ElementRef, AfterViewInit, QueryList, ViewChildren} from '@angular/core';
import {CommunicationService, SideNavItem} from '../../../services/mainAppService';
import {QuerySelectorDirective} from '../directives/query-selector/query-selector.directive';

@Component({
    selector: 'pwa-start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./start-page.component.css'],
})
export class StartPageComponent implements AfterViewInit {

  constructor(private communication : CommunicationService) { }

  private localMenu : SideNavItem[] =  [
      new SideNavItem({text : 'Прогрессивные веб приложения', href : '/start-page', fragment : 'start-top'}),
      new SideNavItem({text : 'Введение в архитектуру', href : '/start-page', fragment : 'start-architecture'}),
      new SideNavItem({text : 'Технологическая последовательность', href : '/start-page', fragment : 'start-sequence'}),
      new SideNavItem({text : 'Терминология и процесс', href : '/start-page',  fragment : 'start-terminology'}),
  ];

  @ViewChildren(QuerySelectorDirective, {read : ElementRef}) private appAnchors : QueryList<ElementRef>;

  ngAfterViewInit() {
      this.communication.sendResource({type : 'resource', appHeader : 'Прогрессивные веб приложения.', localData : { appAnchors : this.appAnchors, localMenu : this.localMenu}})
  }


}
