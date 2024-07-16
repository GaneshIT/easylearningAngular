import { Component } from '@angular/core';
import { Courses } from 'src/app/model/courses.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses?: Courses[];
  currentCourse: Courses = {};
  currentIndex = -1;
  title = '';

  constructor(private courseService: CourseService) { }
  ngOnInit(): void {
    this.retrieveCourses();
  }
  retrieveCourses(): void {
    this.courseService.getAll()
      .subscribe({
        next: (data) => {
          this.courses = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
