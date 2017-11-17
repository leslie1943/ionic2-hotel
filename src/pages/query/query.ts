import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Users } from '../../providers/users';
import { CustomerListPage } from '../customer-list/customer-list';


@IonicPage()
@Component({
  selector: 'page-query',
  templateUrl: 'query.html',
})
export class QueryPage {

  mobile: any;
  reg_date: any;

  constructor(public navCtrl: NavController, public navParam: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public userService: Users) {
    this.mobile = "1";
    this.reg_date = new Date();
  }

  query() {
    let loading = this.loadingCtrl.create({
      content: "Querying customer..."
    });
    loading.present();

    let options = {
      mobile: this.mobile,
      reg_date: this.reg_date
    }

    this.userService.userQuery(options).then(data => {
      loading.dismiss();

      if (typeof data[0] == "undefined") {
        let alert = this.alertCtrl.create({
          title: "Opps.",
          subTitle: "No matched records found.",
          buttons: ["OK"]
        });
        alert.present();
      } else {
        this.navCtrl.push(CustomerListPage, {
          customers: data,
          details: options
        });
      }
    }, (err) => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueryPage');
  }
}
