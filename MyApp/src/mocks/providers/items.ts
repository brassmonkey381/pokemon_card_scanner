import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { HttpClient } from '@angular/common/http';

interface IDictionary {
  [index: string]: string;
}

@Injectable()
export class Items {
  items: Item[] = [];
  data: any;
  nestedSeriesArr: Item[] = [];
  nestedSeries: any;
  seriesImgsArr: Item[] = [];
  seriesImgs: any;
  setImgsArr: Item[] = [];
  setImgs: any;
  series_to_set_dict: IDictionary = {};
  set_to_set_img_dct: IDictionary = {};

  defaultItem: any = {
    "series_name": "Burt Bear",
    "img_mobile_path": "assets/img/speakers/bear.jpg",
    "sets_in_series": ["Burt is a Bear."],
    "sets_imgs_in_series": ["Burt is a Bear."]
  };

  getData() {
    this.http.get('assets/json-server/sample_database.json').subscribe(res => {
      this.data = res;
      //console.log(this.data);

      var c = 0;
      for (let item of this.data) {
        // console.log(item);
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

  getSeriesImgs() {
    this.http.get('assets/json-server/series_mapper.json').subscribe(res => {
      var _dict = res[0];
      for (let key in _dict) {
        // series root
        const series_root = "assets/img/pkmncom/series/";
        let x = new Item(
          {
            'series_name': key,
            'img_mobile_path': series_root + _dict[key],
            'sets_in_series': this.series_to_set_dict[key]
          }
        );
        let set_srcs = [];
        for (let ix in x.sets_in_series) {
          var set_name = x.sets_in_series[ix];
          set_srcs.push(this.set_to_set_img_dct[set_name]);
          // console.log(this.set_to_set_img_dct[set_name]);
        }
        x.sets_imgs_in_series = set_srcs;
        this.seriesImgsArr.push(x);
      }
      console.log(this.seriesImgsArr);
    },
      (err) => {
        alert('failed loading json data');
      });
  }

  getNestedSeries() {
    this.http.get('assets/json-server/nested_series_dict.json').subscribe(res => {
      this.nestedSeries = res[0];
      // console.log(this.nestedSeries);

      // for (let item of this.nestedSeries) {
      //   this.nestedSeriesArr.push(new Item(item));       
      // }
      for (let seriesKey in this.nestedSeries) {
        let arrayOfSetsInSeries = this.nestedSeries[seriesKey];
        // Use `key` and `value`
        this.series_to_set_dict[seriesKey] = arrayOfSetsInSeries;
      }

    },
      (err) => {
        alert('failed loading json data');
      });
  }

  getSetImgs() {
    this.http.get('assets/json-server/set_mapper.json').subscribe(res => {
      var _dict = res[0];
      for (let key in _dict) {
        // series root
        const set_root = "assets/img/pkmncom/sets/";

        this.set_to_set_img_dct[key] = set_root + _dict[key];
      }
      console.log(this.set_to_set_img_dct);
    },
      (err) => {
        alert('failed loading json data');
      });
  }

  constructor(public http: HttpClient) {
    this.getData();
    this.getNestedSeries();
    this.getSetImgs();
    this.getSeriesImgs();
  }

  query(params?: any) {
    if (!params) {
      return this.seriesImgsArr;
    }

    return this.seriesImgsArr.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  // add(item: Item) {
  //   this.items.push(item);
  // }
  // 
  // delete(item: Item) {
  //   this.items.splice(this.items.indexOf(item), 1);
  // }
}
