import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: '', redirectTo: '/header', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'skills', component: SkillsComponent },
  //{ path: 'experience', component: ExperienceComponent },
 // { path: 'education', component: EducationComponent }
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
