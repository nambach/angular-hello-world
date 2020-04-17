import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './courses/course.service';
import { StarIconComponent } from './star-icon/star-icon.component';
import { BtnLikeComponent } from './btn-like/btn-like.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostComponent } from './post/post.component';
import { HttpErrorHandler } from './common/handlers/HttpErrorHandler';
import { PostService } from './services/post.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';

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
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CourseService,
    PostService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: HttpErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
