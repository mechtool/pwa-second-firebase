import {Component, Input } from "@angular/core";
@Component({
    selector: 'pwa-example-code',
    styleUrls: ['./example-code-template.component.css'],
    templateUrl: './example-code-tempate.component.html',
})
export class ExampleCodeTemplateComponent{
    @Input() context : any;
}