import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { UsersModule } from './pages/users/users.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { CoursesModule } from './pages/courses/courses.module';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ToolbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    RouterModule,
    UsersModule,
    HomeModule,
    CoursesModule,
    DashboardRoutingModule
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
