import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { PageSettingsComponent } from './components/page-settings/page-settings.component';

const routes:Routes=[
    {
        path:'',
        component:SettingsComponent,
    },
    {
        path:'user',
        component:UserSettingsComponent,
    },
    {
        path:'page',
        component:PageSettingsComponent,
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
export class SettingsRoutingModule { }