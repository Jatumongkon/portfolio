import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';





@NgModule({
    declarations:[
      NavTopComponent,
      AppComponent,
      HomeComponent
   ],
    imports:[
      BrowserModule,
      CommonModule,



    ],
    providers: [],
    bootstrap: [AppComponent]



})


export class AppModule { }
