import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularSecondProject';
}

export interface Iplayer {
  srNo : number;
  fname: string;
  lname: string;
  nickname: string;
  number: number;
}

export interface Ipost {
  userId: number;
  id: number;
  title: string;
  body: string;
}