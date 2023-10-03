import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function ageValidator(control:AbstractControl):ValidationErrors|null{
    if(typeof control.value==='number' &&(control.value<16||control.value>35)){
        return{
            ageValidator:true
        }
    }
    return null;
}