import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { switchMap, combineLatest } from "rxjs/operators";

@Component({
  selector: "github-profile",
  templateUrl: "./github-profile.component.html",
  styleUrls: ["./github-profile.component.css"],
})
export class GithubProfileComponent implements OnInit {
  user;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(combineLatest(this.route.paramMap, this.route.queryParamMap))
      .pipe(
        switchMap((params) => {
          let username = params[0].get("username");
          console.log(params[2].get("id"));
          return this.http.get(`https://api.github.com/users/${username}`);
        })
      )
      .subscribe((data) => (this.user = data));
  }

  goBack() {
    this.router.navigate(["/followers"], {
      queryParams: { page: 1 },
    });
  }
}
