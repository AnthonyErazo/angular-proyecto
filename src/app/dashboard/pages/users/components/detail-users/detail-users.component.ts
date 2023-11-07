import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alums, Course } from 'src/app/models';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-detail-users',
  templateUrl: './detail-users.component.html',
  styleUrls: ['./detail-users.component.scss']
})
export class DetailUsersComponent implements OnDestroy {
  alum: Alums = {
    id: 0,
    name: '',
    lastName: '',
    email: '',
    condition: '',
    semester: 0,
    age: 0,
    cursesId: []
  };
  cursesAlums:Course[]=[];
  loading = true;
  private dataSubscription: Subscription = new Subscription();
  constructor(private activateRoute: ActivatedRoute,
    private usersService:UsersService,
    private router: Router) {
    this.dataSubscription = this.usersService.getAlumById(this.activateRoute.snapshot.params['id']).subscribe({
      next: (alum) => {
        console.log(alum)
        this.alum = alum;
        this.usersService
            .getCoursesByIds(this.alum.cursesId)
            .subscribe((courses) => {
              this.cursesAlums = courses;
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
  displayedColumns=['name','starDate','endDate','actions'];
}
