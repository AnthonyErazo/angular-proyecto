import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';
import { ModalCoursesComponent } from './components/modal-courses/modal-courses.component';
import { CoursesService } from './courses.service';
import { Course } from './models/coursesModels';

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
  private coursesService:CoursesService
  ) {
  }
  ngOnInit(): void {
    this.dataSubscription = this.coursesService.getCourses().subscribe({
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
  openCoursesDialog(): void {
    this.matDialog.open(ModalCoursesComponent).afterClosed().subscribe({
      next: (v) => {
        if (!!v) {
          const ultimoId = this.courses.length > 0 ? this.courses[this.courses.length - 1].id : 0;
          const nuevoId = ultimoId + 1;
          const newData: Course = {
            id: nuevoId,
            ...v,
          };
          this.coursesService.createCourse(newData).subscribe({
            next: () => {
              this.courses = this.courses.concat(newData);
            },
            error: (error) => {
              console.error('Error al enviar datos al servidor:', error);
            }
          });
        }
      },
    });
  }
  onEditCourse(course:Course):void{
    this.matDialog.open(ModalCoursesComponent,{
      data:course,
    }).afterClosed().subscribe({
      next:(v)=>{
        if(!!v){
          const updatedUser = { ...course, ...v };
          this.coursesService.updateCourse(updatedUser.id,updatedUser).subscribe({
            next: () => {
              this.courses=this.courses.map((u)=>u.id===course.id?({...u,...v}):u);
            },
            error: (error) => {
              console.error('Error al enviar datos al servidor:', error);
            }
          })
        }
      }
    });
  }
  onDeleteCourse(courseId:number):void{
    this.coursesService.deleteCourse(courseId).subscribe({
      next: () => {
        this.courses = this.courses.filter((u) => u.id !== courseId);
      },
      error: (error) => {
        console.error('Error al eliminar usuario en el servidor:', error);
      }
    });
  }
}
