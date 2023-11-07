import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {MatCardModule} from '@angular/material/card';
import { NoticesCardComponent } from './components/notices-card/notices-card.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { AvisosViewComponent } from './components/avisos-view/avisos-view.component';

@NgModule({
  declarations: [
    HomeComponent,
    NoticesCardComponent,
    AvisosViewComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
