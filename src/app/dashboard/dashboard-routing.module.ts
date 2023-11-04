import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'users',
    loadChildren:()=>import('./pages/users/users.module').then((m)=>m.UsersModule),
  },
  {
    path:'courses',
    loadChildren:()=>import('./pages/courses/courses.module').then((m)=>m.CoursesModule),
  },
  {
    path:'settings',
    loadChildren:()=>import('./pages/settings/settings.module').then((m)=>m.SettingsModule),
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
