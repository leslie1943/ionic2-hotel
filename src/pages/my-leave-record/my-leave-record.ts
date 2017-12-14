import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import {NewLeavePage} from '../new-leave/new-leave';
/**
 * Generated class for the Create page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-leave-record',
  templateUrl: 'my-leave-record.html',
})
export class MyLeaveRecordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtr: LoadingController) {
    //get parameters from last page.
    console.log("[LOG]: Login user: " + JSON.stringify(this.navParams.get("user").email));
    console.log("[LOG]: Login _id: " + JSON.stringify(this.navParams.get("user")._id));
  }


  new_leave(){
    this.navCtrl.push(NewLeavePage,{
      user: this.navParams.get("user"),
      signed: this.navParams.get("signed")
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyLeaveRecordPage');
  }
}
