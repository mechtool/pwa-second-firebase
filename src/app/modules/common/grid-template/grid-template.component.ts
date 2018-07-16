import {Component, Input, OnInit} from '@angular/core';
import {GridItem} from '../../../services/mainAppService';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'pwa-grid-template',
  templateUrl: './grid-template.component.html',
  styleUrls: ['./grid-template.component.css']
})
export class GridTemplateComponent implements OnInit {

  constructor(public sanitizer : DomSanitizer) { }

  @Input() public context : GridItem[] = [];

  ngOnInit() {
  }
}
