import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Article } from '../article.model';
import { ArticleService } from './../article.service';
import { ArticleEditComponent } from './../article-edit/article-edit.component';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-article-view',
  providers: [ArticleService],
  entryComponents: [ArticleEditComponent],
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.less']
})
export class ArticleViewComponent implements OnInit {

  public articleList: FirebaseListObservable<any[]>;
  public selectedArticle: FirebaseObjectObservable<any[]>; // This should be the currently selected article

  article = new Article('hatoful_bf', 'Short', './assets/hatoful-bf.jpg', 'Hatoful Boyfriend',
  'Pidgeon Luv', 'Bad', 'Bilbo Baggins', 'I went there, but I will not go back again',
  'This is the main article text for Hatoful Boyfriend');

  articleSortRoutes = [
    {url: '/reviews/all', name: 'All'},
    {url: '/reviews/no_plot', name: 'No-Plot Reviews'},
    {url: '/reviews/plot', name: 'Full Plot Reviews'},
    {url: '/reviews/other', name: 'Other'},
    {url: '/reviews/author', name: 'By Author'}
  ];

  constructor(public dialog: MdDialog, private articleService: ArticleService, public afDB: AngularFireDatabase) {
    this.articleList = this.afDB.list('articles');
    this.selectedArticle = this.afDB.object('articles/diablo2');
   }

  ngOnInit() {
    // this.ArticleView = this.articleService.getArticleView();
  }

  openArticleDialog() {
    this.dialog.open(ArticleEditComponent, {
      height: '85%',
      width: '600px',
    });
    // .afterClosed().subscribe((article) => {});
  }

}
