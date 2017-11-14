import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingPage } from '../booking/booking';

/**
 * Generated class for the AvailableRoomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-available-rooms',
  templateUrl: 'available-rooms.html',
})
export class AvailableRoomsPage {
  rooms: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rooms = this.navParams.get('rooms'); // 'rooms' is the parameter name at the beginning in SearchPage
  }

  bookRoom(room) {
    this.navCtrl.push(BookingPage, {
      room: room,
      details: this.navParams.get('details') //'details' is the parameter name at the beginning in SearchPage
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvailableRoomsPage');
  }

}
