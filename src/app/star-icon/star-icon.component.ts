import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "star-icon",
  templateUrl: "./star-icon.component.html",
  styleUrls: ["./star-icon.component.css"],
})
export class StarIconComponent implements OnInit {
  movieTitle: string;
  isSelected = true;

  @Output() change = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleVote() {
    this.change.emit();
    this.isSelected = !this.isSelected;
  }

  handleInput($event) {
    let { value } = $event.target;
    let preps = ["of", "the"];
    let parts = value.split(" ");
    let newTitle = parts
      .map((part) => {
        part = part.toLowerCase();
        if (preps.includes(part)) return part;
        return this.capitalizeFirstLetter(part);
      })
      .join(" ");
    this.movieTitle = this.capitalizeFirstLetter(newTitle);
  }

  capitalizeFirstLetter = (s: string) => {
    return s.charAt(0).toUpperCase() + s.substring(1);
  };
}
