import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses() {
    return [
      { name: "React Native" },
      { name: "Spring Security" },
      { name: "Elixir" }
    ]
  }
}
