import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

/**
 * Generated class for the Create page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtr: LoadingController) {
    //get parameters from last page.
    console.log("[LOG]: Login user: " + JSON.stringify(this.navParams.get("user").email));
    console.log("[LOG]: Login _id: " + JSON.stringify(this.navParams.get("user")._id));
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalPage');
  }
}
