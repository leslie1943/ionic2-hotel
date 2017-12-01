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
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtr: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }
}
