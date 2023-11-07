import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { PageSettingsComponent } from './components/page-settings/page-settings.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { SettingsRoutingModule } from './settings-routing.module';



@NgModule({
  declarations: [
    SettingsComponent,
    PageSettingsComponent,
    UserSettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ],
  exports:[SettingsComponent]
})
export class SettingsModule { }
