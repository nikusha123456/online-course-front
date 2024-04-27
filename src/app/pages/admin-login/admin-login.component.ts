import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  adminForm!: FormGroup;
  ngOnInit(): void {}

  constructor(private adminService: AdminService, private fb: FormBuilder) {
    this.adminForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: [1], // getit gavaketo
    });
  }

  login() {
    if (this.adminForm.valid) {
      const credentials = this.adminForm.value;
      this.adminService.login(credentials).subscribe((response) => {
        localStorage.setItem('accessToken', response.accessToken);
        window.location.reload();
        window.location.href = '/';
        this.adminService.expiringToken(3600000);
      });
    }
  }
}
