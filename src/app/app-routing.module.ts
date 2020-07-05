import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ArticleListComponent} from "./article-list/article-list.component";
import {AboutComponent} from "./about/about.component";

const route: Routes = [
  { path: 'articles', component: ArticleListComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: ArticleListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
