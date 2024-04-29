import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];
  currentPage: number = 1;
  totalCourses: number = 0;
  selectedSortOption: string = '';

  constructor(private courseService: CoursesService) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses() {
    this.courseService.getCourses(this.currentPage).subscribe((data) => {
      this.courses = data.courses;
      this.totalCourses = data.totalCount;
    });
  }

  sortCourses() {
    if (this.selectedSortOption === '2') {
      this.sortHighToLow();
    } else if (this.selectedSortOption === '') {
      this.fetchCourses();
    } else if (this.selectedSortOption === '1') {
      this.sortLowToHigh();
    }
  }

  sortLowToHigh() {
    this.courseService
      .sortByPriceLowToHigh(this.currentPage)
      .subscribe((data) => {
        this.courses = data.courses;
        this.totalCourses = data.totalCount;
      });
  }

  sortHighToLow() {
    this.courseService
      .sortByPriceHighToLow(this.currentPage)
      .subscribe((data) => {
        this.courses = data.courses;
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
    // Assuming pageSize is hardcoded as 9
    return Array.from(
      { length: Math.ceil(this.totalCourses / 9) },
      (_, index) => index + 1
    );
  }
}
