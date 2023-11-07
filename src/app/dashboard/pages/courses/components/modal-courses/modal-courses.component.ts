import { Component, Inject } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { stringValidator } from 'src/app/utils/custom-validators';
import { Course } from '../../models/coursesModels';

@Component({
  selector: 'app-modal-courses',
  templateUrl: './modal-courses.component.html',
  styleUrls: ['./modal-courses.component.scss']
})
export class ModalCoursesComponent {
  courseForm: FormGroup;
  conditionSelect = '';
  constructor(private fb: FormBuilder,
    private matDialogRef: MatDialogRef<ModalCoursesComponent>,
    @Inject(MAT_DIALOG_DATA) public course?: Course) {
    this.courseForm = this.fb.group({
      name: ['', [Validators.required,stringValidator]],
      description: ['', Validators.required],
      starDate: ['', Validators.required],
      endDate: ['', Validators.required],
    })
    if (this.course) {
      this.courseForm.patchValue(this.course);
    }
  }
  onSubmit(): void {
    if (this.courseForm.invalid) {
      this.courseForm.markAsTouched();
    } else {
      this.matDialogRef.close(this.courseForm.value);
    }
  }
}
