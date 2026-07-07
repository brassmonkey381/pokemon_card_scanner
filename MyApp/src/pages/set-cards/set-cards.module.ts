import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { SetCardsPage } from './set-cards';

@NgModule({
  declarations: [
    SetCardsPage,
  ],
  imports: [
    IonicPageModule.forChild(SetCardsPage),
    TranslateModule.forChild()
  ],
  exports: [
    SetCardsPage
  ]
})
export class SetCardsPageModule { }
