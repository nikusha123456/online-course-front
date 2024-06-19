import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
})
export class CoursesPageComponent implements OnInit {
  course_title!: string;
  description!: string;
  price!: number;
  isDescription: boolean = false;
  isReviews: boolean = false;
  isCurriculum: boolean = false;
  isInstructor: boolean = false;

  switchToDescription() {
    this.isDescription = true;
    this.isCurriculum = false;
    this.isInstructor = false;
    this.isReviews = false;
  }

  switchToReviews() {
    this.isReviews = true;
    this.isInstructor = false;
    this.isDescription = false;
    this.isCurriculum = false;
  }

  switchToCurriculum() {
    this.isCurriculum = true;
    this.isInstructor = false;
    this.isDescription = false;
    this.isReviews = false;
  }

  switchToInstructor() {
    this.isInstructor = true;
    this.isReviews = false;
    this.isDescription = false;
    this.isCurriculum = false;
  }

  constructor(
    private courseService: CoursesService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id) {
        this.courseService.getCourseById(id).subscribe((data) => {
          this.course_title = data.course_title;
          this.description = data.description;
          this.price = data.price;
        });
      }
    });
  }
}
