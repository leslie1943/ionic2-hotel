import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Rooms } from '../../providers/rooms';
import { AvailableRoomsPage } from '../available-rooms/available-rooms';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  type: any;
  guests: any;
  beds: any;
  priceRange: any;
  from: any;
  to: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public roomsService: Rooms, public alertCtrl: AlertController, public loadingCtr: LoadingController) {
    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    this.priceRange = {
      lower: 0,
      upper: 500
    };

    this.type = 'standard';
    this.guests = 1;
    this.beds = 1;
    this.from = today.toISOString();
    this.to = tomorrow.toISOString();
  }

  findRooms() {
    let loading = this.loadingCtr.create({
      content: 'Finding rooms...'
    });
    loading.present();

    let options = {
      type: this.type,
      beds: this.beds,
      guests:this.guests,
      priceRange: this.priceRange,
      from: this.from,
      to: this.to
    }

    //roomsService: module "Room" in provider folder, 2 detail functions be included
    this.roomsService.getRooms(options).then((data) => {
      loading.dismiss();

      if (typeof (data[0]) === 'undefined') {
        let alert = this.alertCtrl.create({
          title: 'Opps!',
          subTitle: 'Sorry, no rooms could be found for your search criterial.',
          buttons: ['OK']
        });
        alert.present();
      } else {
        this.navCtrl.push(AvailableRoomsPage, {
          rooms: data,
          details: options
        });
      }
    }, (err) => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
}
