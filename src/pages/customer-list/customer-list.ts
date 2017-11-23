import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomerViewPage } from '../customer-view/customer-view';

/**
 * Generated class for the AvailableRoomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-list',
  templateUrl: 'customer-list.html',
})
export class CustomerListPage {
  users: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.users = this.navParams.get("users");
  }

  viewUser(user) {
    this.navCtrl.push(CustomerViewPage, {
      user: user,
      details: this.navParams.get('details')
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerListPage');
  }

}
