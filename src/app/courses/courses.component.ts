import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title: string;
  courses: any[];
  email = "nambach2@gmail.com";

  tweet = {
    isSelected: true,
    likeCounts: 14
  };

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.title = "My Courses";
    this.courses = this.courseService.getCourses();
  }

  buttonHandler($event) {
    $event.stopPropagation();
    console.log("Button was clicked", $event);
  }

  divHandler() {
    console.log('Div was clicked');
  }

  handleInputEnter(email) {
    console.log("Enter was pressed", email);
  }

  handleEmail() {
    console.log(this.email);
  }

  handleChange() {
    console.log("Button was changed");
  }
}
