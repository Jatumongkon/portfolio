import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectPageComponent } from './project-page/project-page.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  { path: '', component :HomeComponent},
  { path: 'Project', component : ProjectPageComponent},
  { path: 'Skill', component : SkillComponent},
  // {path: '/', redirectTo: 'home', pathMatch: 'full' },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class  AppRoutes {

}
