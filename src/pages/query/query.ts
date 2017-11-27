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
  email: any;
  serial: any;
  firstname: any;
  lastname: any;

  user: any;
  signed: any;

  constructor(public navCtrl: NavController, public navParam: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public userService: Users) {
    this.mobile = "";
    this.email = "";
    this.serial = "";
    this.firstname = "";
    this.lastname = "";

    //get parameters from last page.
    this.user = this.navParam.get("user");
    this.signed = this.navParam.get("signed");
  }

  //Perform querying.
  query() {
    let loading = this.loadingCtrl.create({
      content: "Querying users..."
    });
    loading.present();

    let options = {
      mobile: this.mobile,
      email: this.email,
      serial: this.serial,
      firstname: this.firstname,
      lastname: this.lastname
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
          signed: this.signed, 
          user: this.user,
          users: data,
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
