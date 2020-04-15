import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from "@angular/forms";
import { OldPasswordValidator } from "./old-password.validator";

@Component({
  selector: "change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"],
})
export class ChangePasswordComponent {
  form = new FormGroup({
    oldPassword: new FormControl(
      "",
      Validators.required,
      OldPasswordValidator.checkOldPassword
    ),
    newPassword: new FormControl("", Validators.required),
    confirmPassword: new FormControl("", Validators.required),
  });

  get oldPassword(): FormControl {
    return this.form.get("oldPassword") as FormControl;
  }

  get newPassword(): FormControl {
    return this.form.get("newPassword") as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.form.get("confirmPassword") as FormControl;
  }

  checkConfirm() {
    if (this.newPassword.value !== this.confirmPassword.value) {
      this.form.setErrors({ confirmNotMatch: true });
      console.log(this.form.errors);
    }
  }
}
