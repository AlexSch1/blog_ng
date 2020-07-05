import {Component, OnDestroy, OnInit} from '@angular/core';
import {Article} from "../models/article";
import {MockArticles} from "../mock/mock-articles";
import {ArticleService} from "../services/article.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, OnDestroy {

  public articles: Article[] = [];
  private destroy$ = new Subject();

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.articles$
      .pipe(takeUntil(this.destroy$))
      .subscribe((list) => this.articles = list);
  }

  ngOnDestroy(): void {
    this.destroy$.next(1);
    this.destroy$.complete();
  }

}
