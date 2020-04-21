import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses/courses.component";
import { CourseService } from "./courses/course.service";
import { StarIconComponent } from "./star-icon/star-icon.component";
import { BtnLikeComponent } from "./btn-like/btn-like.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { FormArrayComponent } from "./form-array/form-array.component";
import { FormBuilderComponent } from "./form-builder/form-builder.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { PostComponent } from "./post/post.component";
import { HttpErrorHandler } from "./common/handlers/HttpErrorHandler";
import { PostService } from "./services/post.service";
import { GithubFollowersComponent } from "./github-followers/github-followers.component";
import { GithubFollowersService } from "./services/github-followers.service";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { GithubProfileComponent } from "./github-profile/github-profile.component";
import { NotfoundComponent } from "./notfound/notfound.component";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StarIconComponent,
    BtnLikeComponent,
    ContactFormComponent,
    SignupFormComponent,
    FormArrayComponent,
    FormBuilderComponent,
    ChangePasswordComponent,
    PostComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "followers/:username", component: GithubProfileComponent },
      { path: "followers", component: GithubFollowersComponent },
      { path: "posts", component: PostComponent },
      { path: "**", component: NotfoundComponent },
    ]),
  ],
  providers: [
    CourseService,
    PostService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: HttpErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
