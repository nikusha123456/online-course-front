import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../pages/signup/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isClicked: boolean = false;
  isLoggedIn!: boolean;
  authService = inject(AuthService);

  ngOnInit(): void {}

  toggleMenu() {
    this.isClicked = !this.isClicked;
  }

  constructor() {
    this.isLoggedIn = !!localStorage.getItem('accessToken');
  }

  logOut() {
    this.authService.logOut();
  }
}
