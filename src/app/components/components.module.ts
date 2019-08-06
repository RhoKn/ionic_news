import { NoticeComponent } from './notice/notice.component';
import { NoticesComponent } from './notices/notices.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NoticesComponent,
    NoticeComponent
  ],
  exports:[
    NoticesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
