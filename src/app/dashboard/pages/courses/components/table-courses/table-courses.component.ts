import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models';

@Component({
  selector: 'app-table-courses',
  templateUrl: './table-courses.component.html',
  styleUrls: ['./table-courses.component.scss']
})
export class TableCoursesComponent {
  constructor(private router:Router){}
  goToDetail(userId:number):void{
    this.router.navigate(['home','courses',userId]);
  }
  @Input()
  dataSource:Course[]=[];

  @Output()
  deleteCourse=new EventEmitter<number>();

  @Output()
  editCourse=new EventEmitter<Course>();
  displayedColumns=['name','starDate','endDate','actions'];
}
