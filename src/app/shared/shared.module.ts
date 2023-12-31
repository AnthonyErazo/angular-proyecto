import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from './pipes/fullname.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FontSize20Directive } from './directives/font-size-20.directive';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    FullnamePipe,
    FontSize20Directive,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FullnamePipe,
    MatSelectModule,
    MatTableModule,
    FontSize20Directive,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
