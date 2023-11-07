import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ageValidator, stringValidator } from 'src/app/utils/custom-validators';
import { Alums } from '../../models/usersModels';

@Component({
  selector: 'app-modal-users',
  templateUrl: './modal-users.component.html',
  styleUrls: ['./modal-users.component.scss']
})
export class ModalUsersComponent {
  alumForm: FormGroup;
  conditionSelect = '';
  options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(private fb: FormBuilder,
    private matDialogRef: MatDialogRef<ModalUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public user?: Alums) {
    this.alumForm = this.fb.group({
      name: ['', [Validators.required,stringValidator]],
      lastName: ['', [Validators.required,stringValidator]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, ageValidator]],
      semester: ['', Validators.required],
      condition: ['', Validators.required],
    })
    if (this.user) {
      this.alumForm.patchValue(this.user);
    }
  }
  
  onSubmit(): void {
    if (this.alumForm.invalid) {
      this.alumForm.markAsTouched();
    } else {
      this.matDialogRef.close(this.alumForm.value);
    }
  }
}
