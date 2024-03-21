import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../pages/signup/auth.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isClicked: boolean = false;
  isLoggedIn!: boolean;
  authService = inject(AuthService);
  isBurgerMenuOpen: boolean = false;

  toggleBurgerMenu() {
    this.isBurgerMenuOpen = !this.isBurgerMenuOpen;
  }

  toggleMenu() {
    this.isClicked = !this.isClicked;
  }

  constructor(private router: Router) {
    this.isLoggedIn = !!localStorage.getItem('accessToken');
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isBurgerMenuOpen = false;
      }
    });
  }
  logOut() {
    this.authService.logOut();
  }
}
