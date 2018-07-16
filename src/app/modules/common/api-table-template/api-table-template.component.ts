import {Component, Input} from "@angular/core";
@Component({
    selector : 'pwa-api-table-template',
    styleUrls : ['./api-table-template.component.css'],
    templateUrl :'./api-table-template.component.html',
})
export class ApiTableTemplateComponent{
    @Input() context : {headers : string[], templates : any[]};
}