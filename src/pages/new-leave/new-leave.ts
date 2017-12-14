import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { Leaves } from '../../providers/leaves';

import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the Create page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-leave',
  templateUrl: 'new-leave.html',
})
export class NewLeavePage {
  leave_id: any;
  leave_requester: any;
  leave_pm: any;
  leave_type: any;
  leave_from: any;
  leave_to: any;
  leave_days: any;
  leave_backup: any;
  leave_contact: any;
  leave_reason: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtr: LoadingController, public leaveService: Leaves) {
    let crt = this.navParams.get("user");

    this.leave_id = crt.email + " - " + "1943";
    this.leave_requester = crt.email;
    this.leave_pm = "Dong Dong Hou";
    //get parameters from last page.
    console.log("[LOG]: Login user: " + JSON.stringify(this.navParams.get("user").email));
    console.log("[LOG]: Login _id: " + JSON.stringify(this.navParams.get("user")._id));
  }

  /**
   * Create a new leave request
   */
  create_leave() {
    //user model
    let new_leave = {
      leave_id: this.leave_id,
      leave_requester: this.leave_requester,
      leave_pm: this.leave_pm,

      leave_type: this.leave_type,
      leave_from: this.leave_from,
      firstname: this.leave_to,
      leave_days: this.leave_days,
      leave_backup: this.leave_backup,
      leave_contact: this.leave_contact,
      leave_reason: this.leave_reason
    }

    //loading
    let loading = this.loadingCtr.create({
      content: 'Creating a new leave...'
    });
    loading.present();

    //Required field checking - email.

    this.leaveService.create(new_leave).then((data) => {
      loading.dismiss();
      let alert = this.alertCtrl.create({
        title: "Success",
        subTitle: "Your leave request has been submitted.",
        buttons: ["OK"]
      });

      alert.present();

      this.navCtrl.push(WelcomePage, {
        signed: true, user: data
      });
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewLeavePage');
  }
}
