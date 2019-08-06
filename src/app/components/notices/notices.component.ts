import { Article } from './../../models/article';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss'],
})
export class NoticesComponent implements OnInit {
  
  @Input() notices: Article[] = [];
  @Input() inFavs = false;

  constructor() { }

  ngOnInit() {}

}
