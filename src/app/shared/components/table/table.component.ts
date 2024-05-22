import { Component } from "@angular/core";
import { Iplayer } from "src/app/app.component";


@Component({
    selector : 'app-table',
    templateUrl : './table.component.html',
    styleUrls : ['./table.component.scss']
})
export class TableComponent{
    index = 0 
    players : Array<Iplayer> = [
        {
         srNo : 1,   
         fname : 'Sachin',
         lname : 'Tendulkar',
         nickname : 'masterB',
         number : 10
        },	
        {
         srNo : 2,  
         fname : 'Rhoit',
         lname : 'Sharama',
         nickname : 'Hitman',
         number : 45
        },
        {
         srNo : 3,  
         fname : 'Virat',
         lname : 'Kholi',
         nickname : 'chiku',
         number : 21
        }
        
    ];
    constructor(){

    }
}