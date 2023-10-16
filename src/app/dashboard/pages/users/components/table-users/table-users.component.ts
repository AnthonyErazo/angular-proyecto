import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alums } from 'src/app/models';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent {
  @Input()
  dataSource:Alums[]=[];

  @Output()
  deleteUser=new EventEmitter<number>();

  @Output()
  editUser=new EventEmitter<Alums>();
  displayedColumns=['fullname','email','semester','condition','actions'];
}
