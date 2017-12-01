import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Users } from '../../providers/users';
import { HomePage } from '../home/home';


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
  firstname: any;
  lastname: any;
  mobile: any;
  icon:any;

  user: any;
  edit_user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: Users, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.user = this.navParams.get('user');
    this.edit_user = this.navParams.get('edit_user');
  }


  //update edit user.
  update(edit_user) {
    //update the edit user. 

    edit_user["firstname"] = this.firstname;
    edit_user["lastname"] = this.lastname;
    edit_user["mobile"] = this.mobile;
    edit_user["icon"] = this.icon;

    //loading
    let loading = this.loadingCtrl.create({
      content: 'Updating user...'
    });
    loading.present();

    //First name validation.
    if (!edit_user["firstname"]) {
      loading.dismiss();
      let alert = this.alertCtrl.create({
        title: "First name",
        subTitle: "Missing First name",
        buttons: ["OK"]
      });
      alert.present();
    }
    //Last name validation.
    else if (!edit_user["lastname"]) {
      loading.dismiss();
      let alert = this.alertCtrl.create({
        title: "First name",
        subTitle: "Missing Last name",
        buttons: ["OK"]
      });
      alert.present();
    }
    //Last mobile validation.
    else if (!edit_user["mobile"]) {
      loading.dismiss();
      let alert = this.alertCtrl.create({
        title: "Mobile",
        subTitle: "Missing mobile",
        buttons: ["OK"]
      });
      alert.present();
    } else {
      this.userService.userUpdate(edit_user).then((data) => {
        console.log("return data" + data);
        loading.dismiss();

        let alert = this.alertCtrl.create({
          title: "Success",
          subTitle: "Update completely.",
          buttons: ["OK"]
        });
        alert.present();
        this.navCtrl.push(HomePage, {
          signed: true, user: this.user
        });
      });
    }
  }
  //back to home.
  back() {
    this.navCtrl.push(HomePage, {
      signed: true, user: this.user
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerViewPage');
  }

}
