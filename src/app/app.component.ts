import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title = 'Retrospectre';
  selectedTab: string;
  user = null;

  tabRoutes = [
    {url: '/home', name: 'Home'},
    {url: '/reviews', name: 'Reviews'},
    {url: '/podcasts', name: 'Podcasts'},
    {url: '/about', name: 'About'},
    {url: '/bios', name: 'Reviewer Bios'},
  ];

  constructor(public afDB: AngularFireDatabase, public afAuth: AngularFireAuth, public authService: AuthService ) {
    // I need to authenticate users to the database here
  }

  ngOnInit() {
    this.authService.getAuthState().subscribe(
      (user) => this.user = user);
  };
}
