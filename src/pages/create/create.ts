import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Rooms } from '../../providers/rooms';
/**
 * Generated class for the Create page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  type: any;
  guests: any;
  beds: any;
  price: any;
  from: any;
  to: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public roomService: Rooms, public loadingCtr: LoadingController) {
    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    this.price = 100;
    this.type = 'standard';
    this.guests = 1;
    this.beds = 1;
    this.from = today.toISOString();
    this.to = tomorrow.toISOString();
  }

  create() {
    //room model
    let newRoom = {
      type: this.type,
      beds: this.beds,
      guests: this.guests,
      price: this.price,
      from: this.from,
      to: this.to
    }

    //loading
    let loading = this.loadingCtr.create({
      content: 'Creating a new room...'
    });
    loading.present();

    //DB new
    this.roomService.createRoom(newRoom).then((res) => {
      loading.dismiss();
      this.navCtrl.popToRoot();
    }, (err) => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }
}
