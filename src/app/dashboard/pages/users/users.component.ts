import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { ModalUsersComponent } from './components/modal-users/modal-users.component';
import { Alums } from 'src/app/models';
import { DataService } from 'src/app/shared/services/data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnDestroy, OnInit{
  alums:Alums[]=[];
  loading = true;
  private dataSubscription: Subscription = new Subscription();
  constructor(private matDialog: MatDialog,
  private dataService:DataService
  ) {
    this.dataSubscription = this.dataService.getDataObservable().subscribe({
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
  ngOnInit(): void {
    
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