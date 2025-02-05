import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { WorkComponent } from './work/work.component';
import { SkillComponent } from './skill/skill.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';





@NgModule({
    declarations:[
      NavTopComponent,
      AppComponent,
      HomeComponent,
      FooterComponent,
      ProjectPageComponent,
      WorkComponent,
      SkillComponent
   ],
    imports:[
      BrowserModule,
      CommonModule,
      RouterModule,
      AppRoutes



    ],
    providers: [],
    bootstrap: [AppComponent]



})


export class AppModule { }
