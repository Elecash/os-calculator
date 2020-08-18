import {AbstractControl} from '@angular/forms';

export function JSONValidator(control: AbstractControl) {
    try {
        JSON.parse(control.value);
        return null;
    } catch (error) {
        return { validJSON: true };
    }
}
