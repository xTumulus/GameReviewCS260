import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) { }

  loginGoogle(googleAccount: firebase.auth.GoogleAuthProvider) {
    this.authService.loginGoogle(googleAccount);
  }

  loginFacebook(facebookAccount: firebase.auth.FacebookAuthProvider) {
    this.authService.loginGoogle(facebookAccount);
  }

  loginTwitter(twitterAccount: firebase.auth.TwitterAuthProvider) {
    this.authService.loginTwitter(twitterAccount);
  }

  ngOnInit() {
  }

}
