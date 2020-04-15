import { AbstractControl, ValidationErrors } from "@angular/forms";

export class OldPasswordValidator {
  static checkOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "1234") {
          resolve(null);
        } else {
          resolve({ invalidPassword: true });
        }
      }, 1500);
    });
  }
}
