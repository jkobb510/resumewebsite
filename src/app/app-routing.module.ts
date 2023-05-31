import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/app-header.component';
import { SkillsComponent } from './skills/app-skills.component';
import { ExperienceComponent } from './experience/app-experience.component';
import { EducationComponent } from './education/app-education.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
