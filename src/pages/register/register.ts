import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import { Users } from '../../providers/users';
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

  mobile: any;
  password: any;
  date: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userServices: Users, public loadingCtr: LoadingController, public alertCtrl: AlertController) {
  }

  register() {
    //user model
    let newUser = {
      mobile: this.mobile,
      password: this.password,
    }

    //loading
    let loading = this.loadingCtr.create({
      content: 'Registering a new user...'
    });
    loading.present();

    //DB new
    this.userServices.userRegister(newUser).then((data) => {
      loading.dismiss();
      //Register fail.
      if (typeof data["ERROR"] != "undefined") {
        let alert = this.alertCtrl.create({
          title: "Duplicated",
          subTitle: "This mobile number has been registerd already.",
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
        this.navCtrl.popToRoot();
      }
    }, (err) => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
}
