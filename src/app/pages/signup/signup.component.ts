import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  isLogin: boolean = true;
  email: string = '';
  password: string = '';
  username: string = '';
  email2: string = '';
  password2: string = '';

  ngOnInit(): void {}

  toggleSwitch(section: string) {
    this.isLogin = section === 'login';
  }
  constructor(private authService: AuthService) {}

  signup(): void {
    const user = {
      email: this.email,
      username: this.username,
      password: this.password,
    };
    this.authService
      .signup(user)
      .subscribe((user) => this.authService.signup(user));
  }

  login() {
    const credentials = {
      email2: this.email2,
      password2: this.password2,
    };

    this.authService.login(credentials).subscribe((response) => {
      console.log(`Access Token:`, response.accessToken);
    });
  }
}
