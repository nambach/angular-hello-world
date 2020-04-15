import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsernameValidator } from "./username.validator";

@Component({
  selector: "signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.css"],
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl(
      "",
      [Validators.required, Validators.minLength(3), UsernameValidator.nospace],
      UsernameValidator.unique
    ),
    password: new FormControl("", Validators.required),

    dob: new FormGroup({
      birthDay: new FormControl(),
      birthMonth: new FormControl(),
      birthYear: new FormControl(),
    }),
  });

  get username() {
    return this.form.get("username");
  }

  get birthYear() {
    return this.form.get('dob.birthYear');
  }

  login() {
    console.log(this.form.value);
  }
}
