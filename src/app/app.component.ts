import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {CommunicationService, MenuItem} from './services/mainAppService';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection : ChangeDetectionStrategy.OnPush,  // явная стратегия фиксации изменений
})
export class AppComponent{

    constructor(public overlayContainer : OverlayContainer, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private communication : CommunicationService){
        //регистрация иконки в реестре иконок
        iconRegistry.addSvgIcon('logo-pwa', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/pwa-blue.svg'));
        //установка темы по умолчанию
        this.overlayContainer.getContainerElement().classList.add(this.appTheme.theme);
        this.communication.communicateObservable.subscribe(resource => {
            if(resource.type == 'resource'){
                this.appHeader = resource.appHeader;
            }
        })
    }
    public appHeader = '';
    public menuItems : MenuItem[] = [
        new MenuItem('Руководства', '/guides', 'zero', 'activeRoute', 'remove', [
            new MenuItem('Манифест', '/guides/manifest', 'first', 'activeRoute', 'remove', [
                new MenuItem('банеры', '/ee', 'second'),
                new MenuItem('банеры', '/ee', 'second'),
            ]),
            new MenuItem('Установочные банеры', '/rr', 'first'),
            new MenuItem('Установочные банеры', '/rr', 'first'),
            new MenuItem('Установочные банеры', '/rr', 'first'),
        ])
    ];
    public appTheme = {theme : 'first-theme'};
    public openedSideNav = true;
    public toolbarButtons = [
        {className : 'menuButton', icon : 'menu', tip : 'Меню', tipClassName : 'buttonTip'},
        {className : 'guidesButton', icon : 'library_books', tip : 'Руководства', tipClassName : 'buttonTip', href : '/guides'},
        {className : 'sampleButton', icon : 'description', tip : 'Примеры', tipClassName : 'buttonTip', href : '/samples'},
    ] ;

    onClickButtons($event){
        let target = $event.target;
        if(target.classList.contains('menuButton')){
            this.openedSideNav = !this.openedSideNav;
        }
    }

}
