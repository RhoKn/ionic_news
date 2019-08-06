import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  notices: Article[] = [];

  constructor(private storage: Storage) {
    this.loadNews();
   }

  storageNews (notice: Article){
    if(this.notices.find(noti=> noti.title !== notice.title)){
      this.notices.unshift( notice);
      this.storage.set('favorites', this.notices);
    }
  }

  async loadNews(){
    this.notices = await this.storage.get('favorites');
    this.notices = this.notices === undefined ? [] : this.notices;
  }


  deleteNotice( notice: Article ){
    this.notices = this.notices.filter (noti => noti.title !== notice.title);
    this.storage.set('favorites', this.notices);
  }

}
