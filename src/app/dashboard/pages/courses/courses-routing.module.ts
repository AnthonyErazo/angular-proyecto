import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { DetailCoursesComponent } from './components/detail-courses/detail-courses.component';

const routes:Routes=[
    {
        path:'courses',
        component:CoursesComponent,
    },
    {
        path:'courses/:id',
        component:DetailCoursesComponent,
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class CoursesRoutingModule { }