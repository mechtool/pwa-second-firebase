import {Component, ElementRef, QueryList, ViewChildren} from "@angular/core";
import {CommunicationService, SideNavItem} from '../../../../../services/mainAppService';
import {QuerySelectorDirective} from '../../../../common/directives/query-selector/query-selector.directive';

@Component({
    selector : 'pn-introduction',
    styleUrls : ['./pn-introduction.component.css'],
    templateUrl : './pn-introduction.component.html',
})
export class PnIntroductionComponent{

    private localMenu : SideNavItem[] = [
	new SideNavItem({text : "Введение", href:'/guides/push-notification/pn-introduction', fragment:'intro'}),
	new SideNavItem({text : "Терминология", href:'/guides/push-notification/pn-introduction', fragment:'terms'}),
	new SideNavItem({text :"Последовательность", href:'/guides/push-notification/pn-introduction', fragment:'understanding'}),
	new SideNavItem({text :"API Уведомлений", href:'/guides/push-notification/pn-introduction', fragment:'notificationsApi'}),
	new SideNavItem({text:"Запрос разрешения", href:'/guides/push-notification/pn-introduction', fragment:'permissionRequest'}),
	new SideNavItem({text:"Отображение оповещения", href:'/guides/push-notification/pn-introduction', fragment:'notificationDisplay'}),
	new SideNavItem({text:"Добавление свойств", href:'/guides/push-notification/pn-introduction', fragment:'addOptions'}),
	new SideNavItem({text:"Добавление действий", href:'/guides/push-notification/pn-introduction', fragment:'addActions'}),
	new SideNavItem({text:"Прослушивание событий", href:'/guides/push-notification/pn-introduction', fragment:'eventListen'}),
	new SideNavItem({text :"Создание на будущее", href:'/guides/push-notification/pn-introduction', fragment:'futureDesign'}),
	new SideNavItem({text:"Проверка поддержки", href:'/guides/push-notification/pn-introduction', fragment:'supportCheck'}),
	new SideNavItem({text:"Проверка разрешения", href:'/guides/push-notification/pn-introduction', fragment:'permissionCheck'}),
	new SideNavItem({text :"Браузерные различия",href:'/guides/push-notification/pn-introduction', fragment:'crossBrowser'}),
	new SideNavItem({text:"Push API", href:'/guides/push-notification/pn-introduction', fragment:'pushApi'}),
	new SideNavItem({text:"Принцип работы",href:'/guides/push-notification/pn-introduction', fragment:'howPush'}),
	new SideNavItem({text:"Подписка на получение", href:'/guides/push-notification/pn-introduction', fragment:'subscribingPush'}),
	new SideNavItem({text:"Обработка push", href:'/guides/push-notification/pn-introduction', fragment:'handlingPush'}),
	new SideNavItem({text:"Протокол",href:'/guides/push-notification/pn-introduction', fragment:'webPushProtocol'}),
	new SideNavItem({text:"Отправка сообщения", href:'/guides/push-notification/pn-introduction', fragment:'sendingPush'}),
	new SideNavItem({text :"Передача данных",href:'/guides/push-notification/pn-introduction', fragment:'sendingData'}),
	new SideNavItem({text:"Идентификация VAPID",href:'/guides/push-notification/pn-introduction', fragment:'identifyingVapid'}),
	new SideNavItem({text:"Использование VAPID", href:'/guides/push-notification/pn-introduction', fragment:'useVapid'}),
	new SideNavItem({text :"Применяемые техники", href:'/guides/push-notification/pn-introduction', fragment:'beastPractices'}),
	new SideNavItem({text:"Использовать разумно", href:'/guides/push-notification/pn-introduction', fragment:'useWisely'}),
	new SideNavItem({text:"Управление множеством",href:'/guides/push-notification/pn-introduction', fragment:'manageMany'}),
	new SideNavItem({text:"Когда отображать", href:'/guides/push-notification/pn-introduction', fragment:'whenShow'}),
	new SideNavItem({text:"Скрывать уведомление", href:'/guides/push-notification/pn-introduction', fragment:'hideShow'}),
	new SideNavItem({text:"Уведомления и закладки", href:'/guides/push-notification/pn-introduction', fragment:'notificationsTabs'}),
	new SideNavItem({text:"Управление на сервере", href:'/guides/push-notification/pn-introduction', fragment:'manageServer'}),
	new SideNavItem({text:"Лишние уведомления",href:'/guides/push-notification/pn-introduction', fragment:'redundant'}),

    ];

    @ViewChildren(QuerySelectorDirective, {read: ElementRef}) private appAnchors: QueryList<ElementRef>;//обеспечение навигации по странице-обязателен для всех страниц, имеющих локальное меню

    constructor(private communication : CommunicationService){}

    ngAfterViewInit(){
        this.communication.sendResource({type : 'resource', appHeader : 'Входящие оповещения', localData : { appAnchors : this.appAnchors, localMenu : this.localMenu}})
    }
}