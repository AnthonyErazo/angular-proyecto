import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { ModalUsersComponent } from './components/modal-users/modal-users.component';
import data from 'src/app/data/data';
import { Alums } from 'src/app/models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  constructor(private matDialog: MatDialog) {
    
  }
  @ViewChild('drawer', { static: false }) drawer: MatDrawer | undefined;
  showFiller = false;
  alums = data;

  openUsersDialog(): void {
    this.matDialog.open(ModalUsersComponent).afterClosed().subscribe({
      next: (v) => {
        if (!!v) {
          const ultimoId = this.alums.length > 0 ? this.alums[this.alums.length - 1].id : 0;
          const nuevoId = ultimoId + 1;
          this.alums = [
            ...this.alums,
            {
              id:nuevoId,
              ...v,
            },
          ]
        }
      },
    });
  }
  onEditUser(user:Alums):void{
    this.matDialog.open(ModalUsersComponent,{
      data:user,
    }).afterClosed().subscribe({
      next:(v)=>{
        if(!!v){
          this.alums=this.alums.map((u)=>u.id===user.id?({...u,...v}):u);
        }
      }
    });
  }
  onDeleteUser(userId:number):void{
    this.alums=this.alums.filter((u)=>u.id!==userId);
  }
}