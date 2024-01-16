import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  isLogin: boolean = true;

  ngOnInit(): void {}

  toggleSwitch(section: string) {
    this.isLogin = section === 'login';
  }
}
