import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { ModalUsersComponent } from './components/modal-users/modal-users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailUsersComponent } from './components/detail-users/detail-users.component';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UsersComponent,
    TableUsersComponent,
    ModalUsersComponent,
    DetailUsersComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    SharedModule,
    RouterModule,
    UsersRoutingModule
  ],
  exports:[UsersComponent]
})
export class UsersModule { }
