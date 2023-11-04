import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../core/guards.guard';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers:[
    AuthGuard
  ],
  exports:[
    AuthComponent
  ]
})
export class AuthModule { }
