import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { MatDrawer } from '@angular/material/sidenav';
import { ModalCoursesComponent } from './components/modal-courses/modal-courses.component';
import { Course } from 'src/app/models';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses:Course[]=[];
  loading = true;
  private dataSubscription: Subscription = new Subscription();
  constructor(private matDialog: MatDialog,
  private dataService:DataService
  ) {
  }
  ngOnInit(): void {
    this.dataSubscription = this.dataService.getCourseObservable().subscribe({
      next: (courses) => {
        this.courses = courses;
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
    this.matDialog.open(ModalCoursesComponent).afterClosed().subscribe({
      next: (v) => {
        if (!!v) {
          const ultimoId = this.courses.length > 0 ? this.courses[this.courses.length - 1].id : 0;
          const nuevoId = ultimoId + 1;
          this.courses = [
            ...this.courses,
            {
              id:nuevoId,
              ...v,
            },
          ]
        }
      },
    });
  }
  onEditCourse(user:Course):void{
    this.matDialog.open(ModalCoursesComponent,{
      data:user,
    }).afterClosed().subscribe({
      next:(v)=>{
        if(!!v){
          this.courses=this.courses.map((u)=>u.id===user.id?({...u,...v}):u);
        }
      }
    });
  }
  onDeleteCourse(userId:number):void{
    this.courses=this.courses.filter((u)=>u.id!==userId);
  }
}
