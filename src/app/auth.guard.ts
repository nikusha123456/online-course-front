import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from './pages/signup/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Check if the user is logged in using the authService
    const isLoggedIn = this.authService.isLoggedIn();

    if (isLoggedIn) {
      // If the user is logged in, redirect them to another route (for example, home)
      this.router.navigate(['/']);
      return false;
    }

    // If the user is not logged in, allow access to the route
    return true;
  }
}
