import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Renderer2,
    Component,
    ViewChild,
    ElementRef,
    AfterViewInit
} from '@angular/core';

import { OverlayContainer } from '@angular/cdk/overlay';
import { MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {CommunicationService, SideNavItem, RouterService} from './services/mainAppService';
import {routerTransition} from './modules/common/animations/animations';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations : [routerTransition],
    changeDetection : ChangeDetectionStrategy.OnPush,  // явная стратегия фиксации изменений
})
export class AppComponent implements AfterViewInit{

    constructor(public overlayContainer : OverlayContainer,
                private iconRegistry: MatIconRegistry,
                private sanitizer: DomSanitizer,
                private communication : CommunicationService,
                private changeDetector : ChangeDetectorRef,
                public router : Router,
                public routerService : RouterService,
                public renderer : Renderer2){
        //регистрация иконки в реестре иконок
        [
            {name : 'logo-pwa', link : 'assets/icons/app-shell/pwa-blue.svg'},
            {name : 'sort', link : 'assets/icons/app-shell/sort-24px.svg'},
            {name : 'menu', link : 'assets/icons/app-shell/menu-24px.svg'},
            {name : 'remove', link : 'assets/icons/app-shell/remove-24px.svg'},
            {name : 'layers', link : 'assets/icons/app-shell/layers-24px.svg'},
            {name : 'filter', link : 'assets/icons/app-shell/filter_none-24px.svg'},
            {name : 'format-color', link : 'assets/icons/app-shell/format_color_fill-24px.svg'},
            {name : 'list', link : 'assets/icons/app-shell/list-24px.svg'},
            {name : 'attention', link : 'assets/icons/attention/error_outline-24px.svg'}
        ].forEach(item => {
            this.iconRegistry.addSvgIcon(item.name, this.sanitizer.bypassSecurityTrustResourceUrl(item.link));
        }) ;
        //подписка на взаимодействие между компонентами
        this.communication.communicateObservable.subscribe(resource => {
            if(resource.type == 'resource'){
                this.appHeader = resource.appHeader;
                this.toolbarButtons[1].disable = !resource.localData;
                if(resource.localData){
                    this.localData = resource.localData;
                }else {
                    this.appMenu = this.menuItems;
                }
            }
            this.changeDetector.detectChanges();
        })
    }
    public appHeader = '';
    public localData : any;
    public appMenu : SideNavItem[];
    public menuItems : SideNavItem[] = this.appMenu = [
        new SideNavItem({text : 'Руководства', href : '/guides', className :'zero', icon :'remove', activeClass : 'activeRoute', children :[
            new SideNavItem({text : 'Манифест', href :'/guides/manifest', className : 'first', activeClass : 'activeRoute'}),
            new SideNavItem({text : "Оболочка приложения", href :  '/guides/app-shell', activeClass : 'activeRoute',  className : 'first'}),
            new SideNavItem({text : "Техника Offline", href : '/guides/offline-cookbook', activeClass : 'activeRoute',  className :'first'}),
            new SideNavItem({text : "Сервисный рабочий", href : '/guides/service-worker', icon :'remove', activeClass : 'activeRoute', className : 'first', children : [
                new SideNavItem({text : 'Обзор', href : '/guides/service-worker/overview', activeClass : 'activeRoute',  className : 'second'}),
                new SideNavItem({text : 'Жизненный цикл', href : '/guides/service-worker/life-cycle', activeClass : 'activeRoute',  className : 'second'}),
                new SideNavItem({text : 'Регистрация', href : '/guides/service-worker/registration', activeClass : 'activeRoute',  className : 'second'}),
                new SideNavItem({text : 'Производительность', href : '/guides/service-worker/performance', activeClass : 'activeRoute',  className : 'second'}),
                new SideNavItem({text : 'Ускорение навигации', href : '/guides/service-worker/speed-up', activeClass : 'activeRoute',  className : 'second'}),
            ]}),
            new SideNavItem({text : "Входящие оповещения", href : '/guides/push-notification', activeClass : 'activeRoute', className : 'first', icon : 'remove', children : [
                new SideNavItem({text : 'Введение', href : '/guides/push-notification/introduction', activeClass : 'activeRoute', className : 'second'}),
                new SideNavItem({text : 'Последовательность Push', href : '/guides/push-notification/principle-operation',activeClass : 'activeRoute',  className :'second'}),
                new SideNavItem({text : 'Подписка пользователя', href : '/guides/push-notification/subscribing-user',activeClass : 'activeRoute',  className : 'second'}),
                new SideNavItem({text : 'Пользовательские разрешения', href :'/guides/push-notification/permission-ux',activeClass : 'activeRoute',  className :'second'}),
                    new SideNavItem({text : 'Использование библиотеки', href :'/guides/push-notification/push-libraries',activeClass : 'activeRoute',  className :'second'}),
                    new SideNavItem({text : 'Протокол Web Push', href :'/guides/push-notification/push-protocol',activeClass : 'activeRoute',  className :'second'}),
                    new SideNavItem({text : 'Обработка событий', href :'/guides/push-notification/push-events',activeClass : 'activeRoute',  className :'second'}),
            ]}),
            new SideNavItem({text : 'Установка на устройство',href : '/guides/install-prompt', activeClass : 'activeRoute', className : 'first', icon : 'remove',  children : [
                    new SideNavItem({text : 'Диалоги установки', href : '/guides/install-prompt/install-messages', activeClass : 'activeRoute', className : 'second'}),
                    new SideNavItem({text : 'Иконки и цвета', href : '/guides/install-prompt/icons-colors', activeClass : 'activeRoute',  className :'second'}),
                ]})
        ]}) ,
        new SideNavItem({text : 'Примеры', href : '/samples', activeClass : 'activeRoute', className : 'first', icon : 'remove', children : [
                new SideNavItem({text : 'Прогноз погоды', href : '/samples/forecast', activeClass : 'activeRoute', className : 'second'}),
            ]}),
    ];
    public logoSource = {'first-theme' : '../assets/icons/app-shell/pwa-yellow.png', 'second-theme' : '../assets/icons/app-shell/pwa-blue.png', 'third-theme' : '../assets/icons/app-shell/pwa-green.png', 'forth-theme': '../assets/icons/app-shell/pwa-blue2.png'};
    public appTheme = {theme : 'second-theme', logoSrc : '../assets/icons/app-shell/pwa-blue.png'};
    public openedSideNav = true;
    public toolbarButtons = [
        {className : 'menuButton', icon : 'menu', tip : 'Видимость меню', tipClassName : 'buttonTip'},
        {className : 'listButton', icon : 'list', tip : 'Переключение меню', tipClassName : 'buttonTip', disable : true},
        {className : 'guidesButton', icon : 'filter', tip : 'Руководства', tipClassName : 'buttonTip', href : '/guides'},
        {className : 'sampleButton', icon : 'layers', tip : 'Примеры', tipClassName : 'buttonTip', href : '/samples'},
    ] ;
    @ViewChild('sideNavContent', {read : ElementRef}) public sideNavRef : ElementRef;

    ngAfterViewInit(){
        this.routerService.startRouter(this)
    }

    onClickButtons($event){
        let target = $event.target;
        if(this.getTarget(target, 'menuButton')){ //нажата кнопка отображения меню
            this.openedSideNav = !this.openedSideNav;
        }
        else if(this.getTarget(target, 'listButton')){ //нажата кнопка вывода локального меню страницы
            this.appMenu = this.appMenu === this.menuItems ? this.localData.localMenu : this.menuItems;
            this.changeDetector.detectChanges();
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

    onChangeThemeColor(theme){
        this.appTheme = {theme : theme.className, logoSrc : this.logoSource[theme.className]} ;
        this.overlayContainer.getContainerElement().classList.add(theme.className);
    }

}
