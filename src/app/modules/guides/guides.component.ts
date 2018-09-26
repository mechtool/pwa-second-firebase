import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/mainAppService';

@Component({
  selector: 'pwa-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuidesComponent implements OnInit {

  constructor(private communication : CommunicationService) { }

    public gridItems = [
        {title : 'Манифест', icon : 'assets/icons/guidesIcons/manifest.png', link : '/guides/manifest', text : 'Файл с именем <span class="d-blue">manifest.json</span>, представляющий из себя метаданные управления настройками приложения в среде операционных систем.'},
        {title : 'Оболочка приложения', icon : 'assets/icons/guidesIcons/appTemplate.png',  link : '/guides/app-shell', text : 'Ресурсы приложения, необходимые для формирования пользовательского интерфейса.'},
        {title : 'Техника Offline', icon : 'assets/icons/guidesIcons/offline.png',  link : '/guides/offline-cookbook', text : 'Поваренная книга Offline. Обзор того, как все работает в контексте прогрессивных веб приложений.'},
        {title : 'Сервисный рабочий', icon : 'assets/icons/guidesIcons/serviceWorker.png',  link : '/guides/service-worker', text : 'Файл сервисного рабочего, который загружается при первом посещении приложения, содержащий структуру и стратегию кэширования ресурсов.'},
        {title : 'Входящие оповещения', icon : 'assets/icons/guidesIcons/push.png',  link : '/guides/push-notification', text : 'Механизм общения сервера приложения и приложения на устройстве пользователя.'},
        {title : 'Установка на устройство', icon : 'assets/icons/guidesIcons/app-install.png',  link : '/guides/install-prompt/install-messages', text : 'Механизм установки иконки вызова приложения на устройство пользователя.'},
    ];

  ngOnInit() {
        this.communication.sendResource({type : 'resource', appHeader : 'Руководства'})
  }

}
