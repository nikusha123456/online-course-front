import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
})
export class EditCourseComponent implements OnInit {
  courseForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id) {
        this.initializeForm(id);
      }
    });
  }

  private initializeForm(id: string): void {
    this.courseForm = this.fb.group({
      id: [id],
      course_title: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      price: [],
      imageUrl: '',
    });
  }

  editCourse() {
    if (this.courseForm.valid) {
      const course = this.courseForm.value;
      this.coursesService.editCourse(course).subscribe(() => {
        window.location.reload();
        window.location.href = '/mycourses';
      });
    }
  }
}
