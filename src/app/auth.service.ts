import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  authState: Observable<firebase.User>;
  currentUser: firebase.User = null;

  adminEmails = [
    'retrospectrereviews@gmail.com',
    'logankitch@gmail.com',
    'karissareynolds1@gmail.com',
    'levi.decrescenzo@gmail.com',
    'minitburt@yahoo.com',
    'ktivory123@gmail.com',
  ];

  constructor(private afAuth: AngularFireAuth) {
    this.authState = this.afAuth.authState;
    this.authState.subscribe(user => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  }

  getAuthState() {
    return this.authState;
  }

  signup(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Signup Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  loginGoogle(googleAccount: firebase.auth.GoogleAuthProvider) {
    this.afAuth.auth.signInWithPopup(googleAccount)
    .then(value => {
      console.log('Login Success!');
      console.log(this.currentUser);
    })
    .catch(err => {
      console.log('Something went wrong:', err.message);
    });
  }

  loginFacebook(facebookAccount: firebase.auth.FacebookAuthProvider) {
    this.afAuth.auth.signInWithPopup(facebookAccount)
    .then(value => {
      console.log('Login Success!');
      console.log(this.currentUser);
    })
    .catch(err => {
      console.log('Something went wrong:', err.message);
    });
  }

  loginTwitter(twitterAccount: firebase.auth.TwitterAuthProvider) {
    this.afAuth.auth.signInWithPopup(twitterAccount)
    .then(value => {
      console.log('Login Success!');
    })
    .catch(err => {
      console.log('Something went wrong:', err.message);
    });
  }

  loginEmail(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Login Success!');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
