import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Users } from '../../providers/users';
import { HomePage } from '../home/home';

/**
 * Generated class for the Create page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  email: any;
  serial: any;
  firstname: any;
  lastname: any;
  nick: any;
  birth: any;
  mobile: any;
  password: any;
  re_password: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userServices: Users, public loadingCtr: LoadingController, public alertCtrl: AlertController) {
  }

  register() {
    //user model
    let newUser = {
      mobile: this.mobile,
      password: this.password,
      re_password: this.re_password,

      email: this.email,
      serial: this.serial,
      firstname: this.firstname,
      lastname: this.lastname,
      nick: this.nick,
      birth: this.birth
    }

    //loading
    let loading = this.loadingCtr.create({
      content: 'Registering a new user...'
    });
    loading.present();

    //Password checking
    if (newUser.password !== newUser.re_password) {
      loading.dismiss();
      let alert = this.alertCtrl.create({
        title: "Password",
        subTitle: "Password should be same.",
        buttons: ["OK"]
      });
      alert.present();
    }
    //Pass password checking.
    else {
      //DB new
      this.userServices.userRegister(newUser).then((data) => {
        loading.dismiss();
        //Register fail.
        if (typeof data["ERROR"] != "undefined") {
          let alert = this.alertCtrl.create({
            title: "Duplicated",
            subTitle: "This email has been registerd already.",
            buttons: ["OK"]
          });
          alert.present();
        }
        //Register Success.
        else {
          let alert = this.alertCtrl.create({
            title: "Success",
            subTitle: "Congratulations! You are the member now.",
            buttons: ["OK"]
          });
          alert.present();
          this.navCtrl.push(HomePage, {
            signed: true, user: data
          });
        }
      }, (err) => {
        console.log(err);
      });
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
}
