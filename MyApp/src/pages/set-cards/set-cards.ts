import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';


import { Item } from '../../models/item';
import { HttpClient } from '@angular/common/http';
import { Items } from '../../providers';

/**
 * Generated class for the SetCardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-set-cards',
  templateUrl: 'set-cards.html',
  })
@Injectable()
export class SetCardsPage {
  data: any;
  items: Item[] = [];

  getData() {
    this.http.get('assets/json-server/sample_database.json').subscribe(res => {
      this.data = res;
      //console.log(this.data);

      var c = 0;
      for (let item of this.data) {
        console.log(item);
        this.items.push(new Item(item));
        c += 1;
        if (c >= 5) {
          break;
        }
      }
    },
      (err) => {
        alert('failed loading json data');
      });
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetCardsPage');
  }

  openItem(item: Item) {
    this.navCtrl.push('CardDetailsPage', {
      item: item
    });
  }
}
