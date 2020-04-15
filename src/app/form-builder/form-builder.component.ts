import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "form-builder",
  templateUrl: "./form-builder.component.html",
  styleUrls: ["./form-builder.component.css"],
})
export class FormBuilderComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ["", Validators.required],
      contact: fb.group({
        email: [],
        phone: [],
      }),
      topics: fb.array([]),
    });
  }

  get topics() {
    return this.form.get("topics") as FormArray;
  }
}
