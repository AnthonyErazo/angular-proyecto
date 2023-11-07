import { Component, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoursesService } from '../../courses.service';
import { Course } from '../../models/coursesModels';
import { Alums } from '../../../users/models/usersModels';

@Component({
  selector: 'app-detail-courses',
  templateUrl: './detail-courses.component.html',
  styleUrls: ['./detail-courses.component.scss']
})
export class DetailCoursesComponent implements OnDestroy{
  course: Course = { 
    id: 0, 
    name: '', 
    description: '', 
    starDate: new Date(), 
    endDate: new Date(),
    alumsId:[] 
  };
  alumsCourses:Alums[]=[];
  loading=true;
  private dataSubscription: Subscription = new Subscription();
  constructor(private activateRoute:ActivatedRoute,
    private coursesService:CoursesService,
    private router: Router){
      this.dataSubscription = this.coursesService.getCourseById(this.activateRoute.snapshot.params['id']).subscribe({
        next: (course) => {
          this.course = course;
          this.coursesService
            .getAlumsByIds(this.course.alumsId)
            .subscribe((alum) => {
              this.alumsCourses = alum;
              this.loading = false;
            });
        },
        error: (error) => {
          console.error('Error al cargar los datos: ', error.message);
          this.loading = false;
          if (error.type === 'CourseNotFound') {
            this.router.navigate(['/not-found']);
          }
        }
      });
  }
  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
  displayedColumns=['fullname','email','semester','condition','actions'];
}
