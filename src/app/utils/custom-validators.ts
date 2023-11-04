import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function ageValidator(control: AbstractControl): ValidationErrors | null {
    if (typeof control.value === 'number' && (control.value < 16 || control.value > 40)) {
        return {
            ageValidator: true
        }
    }
    return null;
}
export function stringValidator(control: AbstractControl): ValidationErrors | null {
    if (typeof control.value === 'string' && /[^a-zA-Z\s]/.test(control.value)) {
        return { 'containsSpecialCharacters': true };
    }

    return null;
}