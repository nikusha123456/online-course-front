import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  isLogin: boolean = true;
  signupForm!: FormGroup;
  loginForm!: FormGroup;
  router = inject(Router);
  ngOnInit(): void {}

  toggleSwitch(section: string) {
    this.isLogin = section === 'login';
  }
  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: [2],
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  signup(): void {
    if (this.signupForm.valid) {
      const user = this.signupForm.value;
      this.authService.signup(user).subscribe(() => {
        alert('SignUp was successful!');
      });
    }
  }

  login() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.authService.login(credentials).subscribe((response) => {
        localStorage.setItem('accessToken', response.accessToken);
        window.location.reload();
        window.location.href = '/';
        this.authService.expiringToken(3600000);
      });
    }
  }
}
