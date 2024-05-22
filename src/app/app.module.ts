import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkillsComponent } from './shared/components/skills/skills.component';
import {TableComponent} from './shared/components/table/table.component'
import {PostCardComponent} from './shared/components/postCard/postCard.component'

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    TableComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
