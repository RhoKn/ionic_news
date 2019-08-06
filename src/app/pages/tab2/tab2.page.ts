import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NewsService } from '../../services/news.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment, { static: true }) segment: IonSegment;
  notices: Article[] = [];

  categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.segment.value = this.categories[0];
    this.loadNoticesByCat(this.categories[0]);
  }

  changeCat(event) {
    this.loadNoticesByCat(event.detail.value);
  }

  loadNoticesByCat(category, event?) {
    this.notices = [];
    this.newsService.getByCategory(category).then(res => {
      this.notices.push(...res.articles);
      if (event) {
        event.target.complete();
        if (res.articles.length === 0) {
          if (this.categories.indexOf(category) !== (this.categories.length - 1)) {
            this.segment.value = this.categories[this.categories.indexOf(category) + 1];
            this.loadNoticesByCat(this.segment.value);
          }else{
            event.target.disabled = true;
          }
        }
      }
    });
  }

  loadData(event) {
    this.loadNoticesByCat(this.segment.value, event);
  }
}



