import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  isLogin: boolean = true;

  ngOnInit(): void {}

  toggleSwitch1() {
    this.isLogin = !this.isLogin;
  }

  toggleSwitch2() {
    this.isLogin = this.isLogin;
  }
}
