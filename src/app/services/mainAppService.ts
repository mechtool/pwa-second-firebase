import {ElementRef, Inject, Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import {NavigationEnd} from '@angular/router';
import { DOCUMENT } from '@angular/common';

export class SideNavItem {
    public text : string;
    public href : string;
    public className? : string;
    public activeClass : string;
    public icon? : string;
    public children? : SideNavItem[];
    public fragment? : string;

    constructor(param){
        this.text = param.text;
        this.href = param.href || '';
        this.className = param.className || '';
        this.activeClass = param.activeClass || '';
        this.icon = param.icon || '';
        this.children = param.children;
        this.fragment = param.fragment;
    }
}

export class GridItem {
    constructor(public title : string, public icon : string,public link : string, public text : string){}
}
@Injectable()
export class CommunicationService{//сервис для передачи списка элементов навигации, соответствуюего определенному
    //модулю приложения . При каждой активации нового маршрута, в загружаемом компоненте, в конструкторе
    //запускается функция отправки данных локального списка представления меню навигации  sendResource(<data>). Для его получения основной модуль,
    // в котором нужно отобразить этот список, подписывается на получения данного списка как подписчик, через метод класса Observable.subscribe()
    private communicateSubject = new Subject<any>();
    public communicateObservable = this.communicateSubject.asObservable();
    sendResource(resource){
        this.communicateSubject.next(resource);
    }
}
@Injectable()
export class RouterService { //сервис занимается маршрутизацией и перехватом фрагментов
    //, фильтруя события маршрутизации, установкой класса активности фрагментарного маршрута
    constructor(@Inject(DOCUMENT) private docRef : Document){}
    private root : any;

    startRouter(root){
        let that = this;
        this.root = root;
        root.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd && event.url.lastIndexOf('#') != -1) {
                let fragment = event.url.substring(event.url.lastIndexOf('#') + 1);
                if (fragment) {
                    //задержка для установки значений локальных переменных приложения
                    //после взаимодействия компонентов
                    setTimeout(() => {
                        //обработка перехода по фрагменту
                        let appAnchors = root.localData.appAnchors,
                            element = appAnchors.find(elem => {
                                return elem.nativeElement.id == fragment;
                            });
                       element && that.animateContent({element: element.nativeElement, duration: 500});
                        //закрытие меню навигации
                       //root.openedSideNav = false;
                      root.changeDetector.detectChanges() ;
                    }, 100)
                }
            }
        })
    }
    animateContent(options) {
        let that = this, left = 0,
            span = Math.round(options.element.offsetTop - that.root.sideNavRef.nativeElement.scrollTop - 10),
            steps = Math.round((options.duration / 1000) * 24),
            step = Math.abs(span)/ steps;
        this.docRef.defaultView.requestAnimationFrame(function animate() {
            that.root.renderer.setProperty(that.root.sideNavRef.nativeElement, 'scrollTop', that.root.sideNavRef.nativeElement.scrollTop +(span < 0 ? - step : step));
            if(++left < steps){
                that.docRef.defaultView.requestAnimationFrame(animate);
            }
        });
    }
    processScroll(){
        //
        //снятие класса активности с активных элементов меню
        //и установка класса активности на текущем элементе
        this.root.localData && this.root.localData.appAnchors && (this.root.localData.appAnchors.forEach((el : ElementRef) => {
            let rect = (el.nativeElement as HTMLElement).getBoundingClientRect();
            if(rect.top <= 100 && rect.top >= 70){ //если элемент находиться у верхнего края клиентской области
                this.root.localData.localMenu.forEach(menuEl => {
                    if(menuEl.children){
                        menuEl.children.forEach(menuEl => {
                             setClass(menuEl, el);
                        })
                    }
                    setClass(menuEl, el);
                })
            }
        }));
        this.root.changeDetector.detectChanges();
        function setClass(menuEl, el) {
            menuEl.fragment == el.nativeElement.id ? (menuEl.className = 'activeRoute') :  (menuEl.className = '');

        }
    }

}