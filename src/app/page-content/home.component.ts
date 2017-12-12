import { Component, OnInit } from '@angular/core';
import { Article } from './articles/article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  podcastList: Article[] = [
    new Article('hatoful_bf', 'Short', './assets/hatoful-bf.jpg', 'Hatoful Boyfriend',
    'Pidgeon Luv', 'Bad', 'Bilbo Baggins', 'I went there, but I will not go back again',
    'This is the main article text for Hatoful Boyfriend'),
    new Article('bioshock', 'Full', './assets/bio-shock.jpg', 'Bio Shock',
    'Wrenches and DNA', 'Excellent', 'Decornaldo', 'I like it because it is scary and stuff',
    'This is the main text for the Bioshock Review'),
    new Article('xcom', 'Other', './assets/xcom.jpg', 'Xcom', 'Aliens Blew my Mind', 'Good',
    'Erickson', 'There were aliens and guns and reviewer things',
    'This is the text for the X-com review article'),
    new Article('hatoful_bf', 'Short', './assets/hatoful-bf.jpg', 'Hatoful Boyfriend',
    'Pidgeon Luv', 'Bad', 'Bilbo Baggins', 'I went there, but I will not go back again',
    'This is the main article text for Hatoful Boyfriend'),
    new Article('bioshock', 'Full', './assets/bio-shock.jpg', 'Bio Shock',
    'Wrenches and DNA', 'Excellent', 'Decornaldo', 'I like it because it is scary and stuff',
    'This is the main text for the Bioshock Review'),
    new Article('xcom', 'Other', './assets/xcom.jpg', 'Xcom', 'Aliens Blew my Mind', 'Good',
    'Erickson', 'There were aliens and guns and reviewer things',
    'This is the text for the X-com review article')
  ];

  ArticleView: Article[] = [
    new Article('hatoful_bf', 'Short', './assets/hatoful-bf.jpg', 'Hatoful Boyfriend',
    'Pidgeon Luv', 'Bad', 'Bilbo Baggins', 'I went there, but I will not go back again',
    'This is the main article text for Hatoful Boyfriend'),
    new Article('bioshock', 'Full', './assets/bio-shock.jpg', 'Bio Shock',
    'Wrenches and DNA', 'Excellent', 'Decornaldo', 'I like it because it is scary and stuff',
    'This is the main text for the Bioshock Review'),
    new Article('xcom', 'Other', './assets/xcom.jpg', 'Xcom', 'Aliens Blew my Mind', 'Good',
    'Erickson', 'There were aliens and guns and reviewer things',
    'This is the text for the X-com review article'),
    new Article('hatoful_bf', 'Short', './assets/hatoful-bf.jpg', 'Hatoful Boyfriend',
    'Pidgeon Luv', 'Bad', 'Bilbo Baggins', 'I went there, but I will not go back again',
    'This is the main article text for Hatoful Boyfriend'),
    new Article('bioshock', 'Full', './assets/bio-shock.jpg', 'Bio Shock',
    'Wrenches and DNA', 'Excellent', 'Decornaldo', 'I like it because it is scary and stuff',
    'This is the main text for the Bioshock Review'),
    new Article('xcom', 'Other', './assets/xcom.jpg', 'Xcom', 'Aliens Blew my Mind', 'Good',
    'Erickson', 'There were aliens and guns and reviewer things',
    'This is the text for the X-com review article')
  ];

  upcomingReviews = [
    'Diablo II',
    'Slime Rancher',
    'Assasin\'s Creed',
    'Journey',
    'Slender: The Arrival',
    'Mass Effect'
  ];

  constructor() { }

  ngOnInit() {
  }

}
