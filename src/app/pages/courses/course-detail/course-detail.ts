import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { COURSES } from '../../../shared/data/courses';
import { CommonModule } from '@angular/common';
import { Course } from '../../../shared/models/course.model';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail {
  course?: Course;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.course = COURSES.find(c => c.id === id)
  }
}
