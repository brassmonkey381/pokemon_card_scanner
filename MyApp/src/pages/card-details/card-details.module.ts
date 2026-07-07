import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { CardDetailsPage } from './card-details';

@NgModule({
  declarations: [
    CardDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CardDetailsPage),
    TranslateModule.forChild()
  ],
  exports: [
    CardDetailsPage
  ]
})
export class CardDetailsPageModule { }
