import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item'); // || items.defaultItem;
    console.log(this.item);
  }
  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  // get_img_srcs() {
  //   let img_srcs = [];
  //   for (let idx in this.item.sets_imgs_in_series) {
  //     img_srcs.push(this.item.sets_imgs_in_series[idx]);
  //   }
  //   console.log(img_srcs);
  //   return (img_srcs);
  // }

  openItem(item: Item) {
    this.navCtrl.push('SetCardsPage', {
      item: item
    });
  }
}
