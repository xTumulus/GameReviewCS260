import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  reviewerBios = [
    {name: 'Kyle', intro: 'I am really smelly'},
    {name: 'James', intro: 'I am really smelly'},
    {name: 'Heidi', intro: 'I am really smelly'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
