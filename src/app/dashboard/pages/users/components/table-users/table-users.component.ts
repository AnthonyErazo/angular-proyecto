import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Alums } from 'src/app/models';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent {
  constructor(private router:Router){}
  goToDetail(userId:number):void{
    this.router.navigate(['home','users',userId]);
  }
  @Input()
  dataSource:Alums[]=[];

  @Output()
  deleteUser=new EventEmitter<number>();

  @Output()
  editUser=new EventEmitter<Alums>();
  displayedColumns=['fullname','email','semester','condition','actions'];
}
