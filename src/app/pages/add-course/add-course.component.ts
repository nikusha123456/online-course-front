import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  courseForm!: FormGroup;
  ngOnInit(): void {}

  constructor(private coursesService: CoursesService, private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      course_title: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      price: [Validators.required],
      imageUrl: '',
    });
  }

  createCourse() {
    if (this.courseForm.valid) {
      const course = this.courseForm.value;
      this.coursesService.createCourse(course).subscribe(() => {
        window.location.reload();
        window.location.href = '/courses';
      });
    }
  }
}
