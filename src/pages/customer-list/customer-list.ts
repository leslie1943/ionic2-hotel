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
  customers: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.customers = this.navParams.get("customers");
  }

  viewCutomer(customer) {
    this.navCtrl.push(CustomerViewPage, {
      customer: customer,
      details: this.navParams.get('details')
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerListPage');
  }

}
