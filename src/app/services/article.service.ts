import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {Article} from "../models/article";
import {MockArticles} from "../mock/mock-articles";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  public articleList: Article[] = MockArticles;
  public articles$;
  private articles = new BehaviorSubject(MockArticles);

  constructor() {
    this.articles$ = this.articles.asObservable();
  }

  getArticles(): Observable<Article[]> {
    return this.articles$;
  }

  getArt(): Observable<Article[]> {
    return of(this.articleList);
  }
}
