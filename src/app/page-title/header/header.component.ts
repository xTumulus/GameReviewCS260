import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AppComponent } from './../../app.component';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  email: string;
  password: string;

  constructor(public afAuth: AngularFireAuth, public afDB: AngularFireDatabase, public authService: AuthService) {
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  loginEmail() {
    this.authService.loginEmail(this.email, this.password);
    this.email = this.password = '';
  }

  loginGoogle() {
    this.authService.loginGoogle(new firebase.auth.GoogleAuthProvider());
  }

  loginFacebook() {
    this.authService.loginFacebook(new firebase.auth.GoogleAuthProvider());
  }

  loginTwitter() {
    this.authService.loginTwitter(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
