import { Component } from '@angular/core';
import { StorageServiceService } from '../../services/storage-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  sliderConf = {
    allowSlidePrev: false,
    allowSlideNext: false
  };
  constructor(public storageService: StorageServiceService) {}

}