import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { FormsModule, NgModel } from '@angular/forms';
// Firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { Article } from './../article.model';
import { ArticleService } from './../article.service';

@Component({
  selector: 'app-article-edit',
  providers: [ArticleService],
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.less']
})
export class ArticleEditComponent {
  isEdit = false;

  public url: string;
  public type: string;
  public image: string;
  public gameTitle: string;
  public title: string;
  public rating: string;
  public author: string;
  public description: string;
  public content: string;

  constructor(
    public dialogRef: MdDialogRef<any>, @Inject(MD_DIALOG_DATA) private dialogData: any,
    public afAuth: AngularFireAuth, public afDB: AngularFireDatabase,
    public articleService: ArticleService) {
  }

  onSaveArticle() {
    this.articleService.createArticle(new Article(this.url, this.type, this.image, this.gameTitle,
    this.title, this.rating, this.author, this.description, this.content));
  }

  onAddHeader(){
    this.content += '<h3>type heading here</h3>';
  }

  onAddImage(){
    //this.contentfield += '/n<p>/n/n</p>'
  }

  onAddParagraph(){
    this.content += '<p>type paragraph here</p>';
  }
}
