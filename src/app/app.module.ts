import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppServerComponent } from './app-server/app-server.component';
import {HeaderComponent} from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    AppServerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
