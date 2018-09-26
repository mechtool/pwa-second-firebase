import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../../services/mainAppService';

@Component({
  selector: 'pwa-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {

    constructor(private communication : CommunicationService) { }

    public gridItems = [
        {title : 'Прогноз погоды', icon : 'assets/icons/samples/sample.png', link : '/samples/forecast', text : 'Маленькое приложение, получающее прогноз погоды для пяти городов из выпадающего списка, оформленное в виде приложения PWA, демонстрирующее работу с сервисным рабочим, кэшем, применение и настройку файла манифеста, который можно проверить, загрузив это приложение на мобильноу устройство и использовать как нативное приложение при отсутствии сети.'},
    ];

    ngOnInit() {
        this.communication.sendResource({type : 'resource', appHeader : 'Примеры приложений'})
    }

}
