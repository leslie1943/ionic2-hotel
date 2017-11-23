import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Users } from '../../providers/users';

/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-view',
  templateUrl: 'customer-view.html',
})
export class CustomerViewPage {
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: Users, public loadingCtrl: LoadingController) {
    this.user = this.navParams.get('user');
  }

  back() {
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerViewPage');
  }

}
