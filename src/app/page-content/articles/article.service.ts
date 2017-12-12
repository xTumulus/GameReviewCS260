import { Injectable } from '@angular/core';
import {  } from 'angularfire2';
import { Article } from './article.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class ArticleService {
    private basePath = '/articles';

    articles: FirebaseListObservable<Article[]> = null;
    article: FirebaseObjectObservable<Article> = null;

    constructor(public afAuth: AngularFireAuth, public afDB: AngularFireDatabase) {}

    getArticleView(query= {}): FirebaseListObservable<Article[]> {
        this.articles = this.afDB.list(this.basePath, {
            query: query
        });
        return this.articles;
    }

    getArticle(key: string): FirebaseObjectObservable<Article> {
        const itemPath = `${this.basePath}/${key}`;
        this.article = this.afDB.object(itemPath);
        return this.article;
    }

    createArticle(article: Article): void {
        this.afDB.object('articles/' + article.url).set({
            type: article.type,
            image: article.image,
            game: article.gameTitle,
            title: article.title,
            rating: article.rating,
            author: article.author,
            desc: article.description,
            content: article.content,
            comments: article.comments
        });
        // this.articles.push(article);
        //  .catch(error => this.handleError(error));
    }

    updateArticle(key: string, value: any): void {
        // this.afDB.object('articles/' + article.url)update(key, value);
        //  .catch(error => this.handleError(error));
    }

    deleteArticle(key: string): void {
        // this.afDB.object('articles/' + article.url).remove(key);
        //  .catch(error => this.handleError(error));
    }
}
