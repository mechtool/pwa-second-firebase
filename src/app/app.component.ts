import {ChangeDetectionStrategy, Component} from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {CommunicationService, SideNavItem} from './services/mainAppService';
import {routerTransition} from './modules/common/animations/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations : [routerTransition],
    changeDetection : ChangeDetectionStrategy.OnPush,  // явная стратегия фиксации изменений
})
export class AppComponent{

    constructor(public overlayContainer : OverlayContainer, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private communication : CommunicationService){
        //регистрация иконки в реестре иконок
        iconRegistry.addSvgIcon('logo-pwa', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/app-shell/pwa-blue.svg'));
        iconRegistry.addSvgIcon('sort', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/app-shell/sort-24px.svg'));
        iconRegistry.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/app-shell/menu-24px.svg'));
        iconRegistry.addSvgIcon('remove', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/app-shell/remove-24px.svg'));
        iconRegistry.addSvgIcon('layers', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/app-shell/layers-24px.svg'));
        iconRegistry.addSvgIcon('filter', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/app-shell/filter_none-24px.svg'));
        iconRegistry.addSvgIcon('format-color', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/app-shell/format_color_fill-24px.svg'));
        //установка темы по умолчанию
        this.overlayContainer.getContainerElement().classList.add(this.appTheme.theme);
        this.communication.communicateObservable.subscribe(resource => {
            if(resource.type == 'resource'){
                this.appHeader = resource.appHeader;
            }
        })
    }
    public appHeader = '';
    public menuItems : SideNavItem[] = [
        new SideNavItem('Руководства', '/guides', 'zero', 'activeRoute', 'remove', [
            new SideNavItem('Манифест', '/guides/manifest', 'first', 'activeRoute', 'remove', [
                new SideNavItem('Иконки и цвета', '/guides/manifest/icons-color', 'second'),
                new SideNavItem('Диалоги установки', '/guides/manifest/install-messages', 'second'),
            ]),
            new SideNavItem("Шаблон приложения", '/guides/app-shell', 'first'),
            new SideNavItem("Техника Offline", '/guides/offline-cookbook', 'first'),
            new SideNavItem("Сервисный рабочий", '/guides/service-worker', 'first','', '', [
                new SideNavItem('Обзор', '/guides/service-worker', 'second'),
                new SideNavItem('Жизненный цикл', '/guides/life-cycle', 'second'),
                new SideNavItem('Регистрация', '/guides/registration', 'second'),
                new SideNavItem('Производительность', '/guides/performance', 'second'),
                new SideNavItem('Ускорение навигации', '/guides/speed-up', 'second'),

            ]),
            new SideNavItem("Входящие оповещения", '/guides/pn-introduction', 'first', '','remove', [
                new SideNavItem('Введение', '/guides/pn-introduction', 'second'),
                new SideNavItem('Последовательность Push', '/guides/principle-push-operation', 'second'),
                new SideNavItem('Подписка пользователя', '/guides/subscribing-user', 'second'),
                new SideNavItem('Пользовательские разрешения.', '/guides/permission-ux', 'second'),
            ]),
        ])
    ];
    public appTheme = {theme : 'first-theme'};
    public openedSideNav = true;
    public toolbarButtons = [
        {className : 'menuButton', icon : 'menu', tip : 'Меню', tipClassName : 'buttonTip'},
        {className : 'guidesButton', icon : 'filter', tip : 'Руководства', tipClassName : 'buttonTip', href : '/guides'},
        {className : 'sampleButton', icon : 'layers', tip : 'Примеры', tipClassName : 'buttonTip', href : '/samples'},
    ] ;

    onClickButtons($event){
        let target = $event.target;
        if(this.getTarget(target, 'menuButton')){
            this.openedSideNav = !this.openedSideNav;
        }
    }

    private getTarget(base, selector){
        if(base.classList.contains(selector)) return base;
        else if(base.classList.contains('buttonBlock')) return null;
        else return this.getTarget(base.parentElement, selector);
    }
    getState(outlet) {
        return outlet.activatedRouteData.type;
    }

}
