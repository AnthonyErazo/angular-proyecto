import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { DetailUsersComponent } from './components/detail-users/detail-users.component';

const routes:Routes=[
    {
        path:'users',
        component:UsersComponent,
    },
    {
        path:'users/:id',
        component:DetailUsersComponent,
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
export class UsersRoutingModule { }