import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  username1!: string;
  email1!: string;
  description1!: string;
  imageUrl1!: string;
  showEditForm: boolean = false;
  editForm!: FormGroup;
  username?: string = '';
  description?: string = '';
  imageUrl?: string = '';

  constructor(private profileService: ProfileService, private fb: FormBuilder) {
    this.editForm = this.fb.group({
      username: '',
      description: '',
      imageUrl: '',
    });
  }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((data) => {
      this.email1 = data.email;
      this.username1 = data.username;
      this.description1 = data.description;
      this.imageUrl1 = data.imageUrl;
    });
  }
  deleteUser() {
    this.profileService.deleteAccount().subscribe(() => {});
  }

  editAccount() {
    if (this.editForm.valid) {
      const user = this.editForm.value;
      this.profileService.editAccount(user).subscribe(() => {});
    }
  }
}
