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
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  mobile: any;
  password: any;
  date: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public userServices: Users, public loadingCtr: LoadingController) {
  }

  login() {
    //room model
    let login_user = {
      mobile: this.mobile,
      password: this.password,
    }

    //loading
    let loading = this.loadingCtr.create({
      content: 'Login...'
    });
    loading.present();
    //

    //DB new
    this.userServices.userLogin(login_user).then((data) => {
      loading.dismiss();

      //No results found.
      if (!data) {
        let alert = this.alertCtrl.create({
          title: 'Opps...',
          subTitle: 'Sorry, no this mobile',
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
          this.navCtrl.push(HomePage,
            {
              signed: true, user: data
            });
        }
      }
    }, (err) => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}
