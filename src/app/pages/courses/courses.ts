import { Component } from '@angular/core';
import { Course } from '../../shared/models/course.model';
import { COURSES } from '../../shared/data/courses';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  imports: [CommonModule],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses {
  courses: Course[] = COURSES;

  constructor(private router: Router) { }

  showDetailCourse(id: number) {
    this.router.navigate(['/courseDetail', id])
  }
}
