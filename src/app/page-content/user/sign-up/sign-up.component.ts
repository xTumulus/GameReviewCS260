import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit {
  email: string;
  password: string;

  constructor(public authService: AuthService) { }

  signUp() {
    this.authService.signup(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  ngOnInit() {
  }

}
