import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Rooms } from '../../providers/rooms';


@IonicPage()
@Component({
  selector: 'page-query',
  templateUrl: 'query.html',
})
export class QueryPage {
  ionViewDidLoad() {
    console.log('ionViewDidLoad QueryPage');
  }
}
