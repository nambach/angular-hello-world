import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidator {
  static nospace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).includes(" ")) {
      return { nospace: true };
    }
    return null;
  }

  static unique(control: AbstractControl): Promise<ValidationErrors|null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "mosh") {
          resolve({ unique: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}