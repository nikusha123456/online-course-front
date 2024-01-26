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
    this.authService
      .login(this.email2, this.password2)
      .subscribe((response) => {
        const token = response.accessToken;
        this.authService.setAuthToken(token);
        console.log('Login Successful', response);
      });
  }
}
