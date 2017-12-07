import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { Users } from '../../providers/users';
import { WelcomePage } from '../../pages/welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email: any;
  password: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public userServices: Users, public loadingCtr: LoadingController) {
    // if (this.navParams.get("signed")) {
    //   this.user = this.navParams.get("user");
    //   this.signed = this.navParams.get("signed");
    //   console.log("[LOG]: Login flag: " + JSON.stringify(this.signed));
    //   console.log("[LOG]: Login user: " + JSON.stringify(this.user.mobile));
    //   console.log("[LOG]: Login _id: " + JSON.stringify(this.user._id));
    // }
  }

  /**
   *  login module
   */
  login() {
    //user model
    let login_user = {
      email: this.email,
      password: this.password,
    }

    //loading
    let loading = this.loadingCtr.create({
      content: 'Login...'
    });
    loading.present();

    //DB new
    this.userServices.userLogin(login_user).then((data) => {
      loading.dismiss();

      //No results found.
      if (!data) {
        let alert = this.alertCtrl.create({
          title: 'Opps...',
          subTitle: 'Sorry, no this user',
          buttons: ['OK']
        });
        alert.present();
      }
      //Find the user.
      else {
        //Wrong password.
        if (typeof data["ERROR"] != "undefined") {
          let alert = this.alertCtrl.create({
            title: 'Invalid password.',
            subTitle: 'Invalid password, please try it again.',
            buttons: ['OK']
          });
          alert.present();
        }
        //Forward home page.
        else {
          this.navCtrl.push(WelcomePage, {
            signed: true, user: data
          });
        }
      }
    }, (err) => {
      console.log(err);
    });
  }

  /**
   *  go to register page
   */
  register() {
    this.navCtrl.push(RegisterPage);
  }

}