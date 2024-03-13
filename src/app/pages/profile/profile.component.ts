import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  username!: string;
  email!: string;
  description!: string;
  imageUrl!: string;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((data) => {
      this.email = data.email;
      this.username = data.username;
      this.description = data.description;
      this.imageUrl = data.imageUrl;
    });
  }
}
