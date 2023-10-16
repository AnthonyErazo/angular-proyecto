import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { ModalUsersComponent } from './components/modal-users/modal-users.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    UsersComponent,
    ToolbarComponent,
    TableUsersComponent,
    ModalUsersComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    SharedModule  
  ],
  exports:[UsersComponent]
})
export class UsersModule { }
