import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { QueryPage } from '../query/query';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  signed: any;
  user: any;

  constructor(public navCtrl: NavController, public navParam: NavParams) {
    if (this.navParam.get("signed")) {
      this.user = this.navParam.get("user");
      this.signed = this.navParam.get("signed");
      console.log("[LOG]: Login flag: " + JSON.stringify(this.signed));
      console.log("[LOG]: Login user: " + JSON.stringify(this.user.mobile));
      console.log("[LOG]: Login _id: " + JSON.stringify(this.user._id));
    }
  }


  openLogin() {
    this.navCtrl.push(LoginPage);
  }

  openRegister() {
    this.navCtrl.push(RegisterPage);
  }

  openQuery() {
    this.navCtrl.push(QueryPage);
  }

  logout() {
    this.navCtrl.push(HomePage, {
      signed: false, user: {}
    });
  }
}