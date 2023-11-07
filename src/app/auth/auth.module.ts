import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../core/guards/guards.guard';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    AuthComponent
  ]
})
export class AuthModule { }
