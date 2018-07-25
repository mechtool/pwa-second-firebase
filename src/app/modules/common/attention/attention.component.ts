import {Component, Input} from '@angular/core';

@Component({
  selector: 'pwa-attention',
  templateUrl: './attention.component.html',
  styleUrls: ['./attention.component.css']
})
export class AttentionComponent {
    @Input() public context : any;
}
