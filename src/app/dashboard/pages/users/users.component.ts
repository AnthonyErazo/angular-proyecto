import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { ModalUsersComponent } from './components/modal-users/modal-users.component';
import { UsersService } from 'src/app/dashboard/pages/users/users.service';
import {Subscription} from 'rxjs';
import { Alums } from './models/usersModels';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnDestroy{
  alums:Alums[]=[];
  loading = true;
  private dataSubscription: Subscription = new Subscription();
  constructor(private matDialog: MatDialog,
  private usersService:UsersService
  ) {
    this.dataSubscription = this.usersService.getAlums().subscribe({
      next: (alums) => {
        this.alums = alums;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar los datos: ', error);
        this.loading = false;
      }
    });
  }
  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
  @ViewChild('drawer', { static: false }) drawer: MatDrawer | undefined;
  showFiller = false;

  openUsersDialog(): void {
    this.matDialog.open(ModalUsersComponent).afterClosed().subscribe({
      next: (v) => {
        if (!!v) {
          const ultimoId = this.alums.length > 0 ? this.alums[this.alums.length - 1].id : 0;
          const nuevoId = ultimoId + 1;
          const newData: Alums = {
            id: nuevoId,
            ...v,
          };
          this.usersService.createAlum(newData).subscribe({
            next: () => {
              this.alums = this.alums.concat(newData);
            },
            error: (error) => {
              console.error('Error al enviar datos al servidor:', error);
            }
          });
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
          const updatedUser = { ...user, ...v };
          this.usersService.updateAlum(updatedUser.id,updatedUser).subscribe({
            next: () => {
              this.alums=this.alums.map((u)=>u.id===user.id?({...u,...v}):u);
            },
            error: (error) => {
              console.error('Error al enviar datos al servidor:', error);
            }
          })
        }
      }
    });
  }
  onDeleteUser(userId:number):void{
    this.usersService.deleteAlum(userId).subscribe({
      next: () => {
        this.alums = this.alums.filter((u) => u.id !== userId);
      },
      error: (error) => {
        console.error('Error al eliminar usuario en el servidor:', error);
      }
    });
  }
}