import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { CommonModule } from '@angular/common';





@NgModule({
    declarations:[
      NavTopComponent,
      AppComponent,


   ],
    imports:[
      BrowserModule,
      CommonModule,



    ],
    providers: [],
    bootstrap: [AppComponent]



})


export class AppModule { }
