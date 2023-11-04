import { Component, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alums, Course } from 'src/app/models';
import { DataService } from 'src/app/shared/services/data.service';

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
    private dataService:DataService,
    private router: Router){
      this.dataSubscription = this.dataService.getCourseById(this.activateRoute.snapshot.params['id']).subscribe({
        next: (course) => {
          this.course = course;
          this.dataService
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
