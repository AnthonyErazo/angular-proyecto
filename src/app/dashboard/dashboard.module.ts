import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { UsersModule } from './pages/users/users.module';
import { LoginModule } from './pages/login/login.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UsersModule,
    LoginModule
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
