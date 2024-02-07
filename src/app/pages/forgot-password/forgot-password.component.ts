import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../signup/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;
  router = inject(Router);
  ngOnInit(): void {}

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      new_password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  forgotPassword(): void {
    if (this.forgotPasswordForm.valid) {
      const credentials = this.forgotPasswordForm.value;
      this.authService.forgotPassword(credentials).subscribe(() => {
        this.router.navigateByUrl('/signup');
      });
    }
  }
}
