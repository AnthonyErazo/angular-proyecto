import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { ModalCoursesComponent } from './components/modal-courses/modal-courses.component';
import { TableCoursesComponent } from './components/table-courses/table-courses.component';
import { DetailCoursesComponent } from './components/detail-courses/detail-courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    CoursesComponent,
    ModalCoursesComponent,
    TableCoursesComponent,
    DetailCoursesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule
  ],
  exports:[CoursesComponent]
})
export class CoursesModule { }
