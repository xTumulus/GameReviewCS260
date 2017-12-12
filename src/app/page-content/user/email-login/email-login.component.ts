import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../auth.service';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.less']
})
export class EmailLoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public authService: AuthService) { }

  login() {
    this.authService.loginEmail(this.email, this.password);
    this.email = '';
    this.password = '';
  }
  ngOnInit() {
  }

}
