import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../../../services/mainAppService';

@Component({
  selector: 'pwa-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private communication : CommunicationService) { }

  ngOnInit() {
      this.communication.sendResource({type : 'resource', appHeader : 'Прогрессивные веб приложения.'})

  }

}
