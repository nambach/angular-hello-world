import { Component, Input } from "@angular/core";

@Component({
  selector: "btn-like",
  templateUrl: "./btn-like.component.html"
})
export class BtnLikeComponent {
  @Input() isSelected: boolean;
  @Input() likeCounts: number;

  constructor() {}

  handleClick() {
    this.likeCounts += (this.isSelected ? -1 : 1);
    this.isSelected = !this.isSelected;
  }

}
