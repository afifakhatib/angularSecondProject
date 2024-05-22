import { Component } from "@angular/core";


@Component({
    selector : 'app-Skills',
    templateUrl : './skills.component.html',
    styleUrls : ['./skills.component.scss']
})

export class SkillsComponent{
   skills : Array<string> = ['HTML', 'CSS','JAVASCRIPT','BOOTSTRAP','TYPESCRIPT','ANGULAR']
    constructor(){

    }
}