import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css'],
})
export class MycoursesComponent implements OnInit {
  mycourses!: any[];
  currentPage: number = 1;
  totalCourses: number = 0;
  selectedSortOption: string = '';

  constructor(private courseService: CoursesService) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses() {
    this.courseService.getMyCourses(this.currentPage).subscribe((data) => {
      this.mycourses = data.myCourses;
      this.totalCourses = data.totalCount;
    });
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchCourses();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages.length) {
      this.currentPage++;
      this.fetchCourses();
    }
  }
  changePage(page: number) {
    this.currentPage = page;
    this.fetchCourses();
  }

  get totalPages(): number[] {
    return Array.from(
      { length: Math.ceil(this.totalCourses / 9) },
      (_, index) => index + 1
    );
  }
}
