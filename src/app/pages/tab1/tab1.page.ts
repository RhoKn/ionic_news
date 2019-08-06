import { Article } from './../../models/article';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  notices: Article[] = [];

  constructor( private newsService: NewsService) {}

  ngOnInit(){
    this.loadNotices();
  }
  loadData(event){
    this.loadNotices( event );
  }

  loadNotices ( event? ){
    this.newsService.getTopHeadlines().then(res => {
      this.notices.push( ...res.articles );
      if( event ){
        event.target.complete();
        if(res.articles.length === 0){
          event.target.disabled = true;
        }
      }
    });
  }
}
