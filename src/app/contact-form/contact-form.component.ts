import { Component } from "@angular/core";

@Component({
  selector: "contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"],
})
export class ContactFormComponent {
  contactMethods: any[] = [
    { id: 1, name: "Email" },
    { id: 2, name: "Phone" },
  ];

  log(x) {
    console.log(x);
  }

  onSubmit(f) {
    console.log(f.value);
  }
}
