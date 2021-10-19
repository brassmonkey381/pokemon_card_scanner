import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ScannerPage } from './scanner';

@NgModule({
  declarations: [
    ScannerPage,
  ],
  imports: [
    IonicPageModule.forChild(ScannerPage),
    TranslateModule.forChild()
  ],
  exports: [
    ScannerPage
  ]
})
export class ScannerPageModule { }
