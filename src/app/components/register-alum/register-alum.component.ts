import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ageValidator} from 'src/app/utils/custom-validators';

@Component({
  selector: 'app-register-alum',
  templateUrl: './register-alum.component.html',
  styleUrls: ['./register-alum.component.scss']
})
export class RegisterAlumComponent {
  useForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder
  ){
    this.useForm=this.formBuilder.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      age:['',[Validators.required,ageValidator]],
      semester:['',Validators.required],
      condition:['',Validators.required]
    });
  }
  @Output()
  alumnoRegistrado = new EventEmitter<any>();
  onSubmit():void{
    if(this.useForm.valid){
      const nuevoAlumno = this.useForm.value;
      this.alumnoRegistrado.emit({
        nombre:nuevoAlumno.name,
        apellido:nuevoAlumno.lastname,
        edad:nuevoAlumno.age,
        semestre:nuevoAlumno.semester,
        condicion:nuevoAlumno.condition
      });
      this.useForm.reset();
    }
  }
  infoFormControl(info:string):AbstractControl{
    return this.useForm.controls[info];
  }
  infoFormControInvalid(info:string):boolean{
    return this.infoFormControl(info).invalid&&this.infoFormControl(info).touched;
  }
}
