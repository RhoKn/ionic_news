import { browser } from 'protractor';
import { Article } from './../../models/article';
import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { StorageServiceService } from '../../services/storage-service.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss'],
})
export class NoticeComponent implements OnInit {

  @Input() notice: Article;
  @Input() index: number;
  @Input() inFavs;

  constructor(private iab: InAppBrowser, public actionSheetController: ActionSheetController, private socialS: SocialSharing, private storageService: StorageServiceService ) { }

  ngOnInit() {}

  goToNotice(){
    this.iab.create(this.notice.url, '_system');
  }


  async openMenu(){

    let options;

    if(!this.inFavs){
      options = {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
          this.storageService.storageNews(this.notice);
        }
      }
    } else {
      options = {
        text: 'Delete from Fav',
        icon: 'trash',
        handler: () => {
          console.log('Remove clicked');
          this.storageService.deleteNotice(this.notice);
        }
      }
    }
    const actionSheet = await this.actionSheetController.create({
      buttons: [ {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
          this.socialS.share(
            this.notice.title,
            this.notice.source.name,
            '',
            this.notice.url
          );
        }
      }, options , {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  
  }

}
