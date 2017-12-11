import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { MyLeaveRecordPage } from '../my-leave-record/my-leave-record';
import { NewTemporalLeavePage } from '../new-temporal-leave/new-temporal-leave';
import { TeamLeavePage } from '../team-leave/team-leave';
import { OTRequestPage } from '../ot-request/ot-request';
import { PersonalPage } from '../personal/personal';


/**
 * Generated class for the Create page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtr: LoadingController) {
    //get parameters from last page.
    console.log("[LOG]: Login user: " + JSON.stringify(this.navParams.get("user").email));
    console.log("[LOG]: Login _id: " + JSON.stringify(this.navParams.get("user")._id));

    //items for navigation.
    this.items = [
      {
        'title': 'My leave record',
        'icon': 'walk',
        'type': 'my_leave_record',
        'color': '#C0E6FF'
      },
      {
        'title': 'New temporal leave',
        'icon': 'create',
        'type': 'new_temp_leave',
        'color': '#C8F08F'
      },
      {
        'title': 'Team leave',
        'icon': 'people',
        'type': 'team_leave',
        'color': '#FFD2FF'
      },
      {
        'title': 'OT request',
        'icon': 'clock',
        'type': 'ot_request',
        'color': '#FDE876'
      },
      {
        'title': 'Personal',
        'icon': 'contact',
        'type': 'personal',
        'color': '#576161'
      }
    ];
  }

  /**
   * 
   * @param item : which one be clicked.
   */
  openDetails(item) {
    console.log("item:" + JSON.stringify(item));
    let type = item["type"];
    switch (type) {
      // --- My leave record
      case "my_leave_record":
        this.navCtrl.push(MyLeaveRecordPage, {
          user: this.navParams.get('user'),
          signed: this.navParams.get('signed')
        });
        break;

      // --- New temporal leave
      case "new_temp_leave":
        this.navCtrl.push(NewTemporalLeavePage, {
          user: this.navParams.get('user'),
          signed: this.navParams.get('signed')
        });
        break;

      // --- Team leave
      case "team_leave":
        this.navCtrl.push(TeamLeavePage, {
          user: this.navParams.get('user'),
          signed: this.navParams.get('signed')
        });
        break;

      // --- OT request
      case "ot_request":
        this.navCtrl.push(OTRequestPage, {
          user: this.navParams.get('user'),
          signed: this.navParams.get('signed')
        });
        break;

      // --- Personal
      case "personal":
        this.navCtrl.push(PersonalPage, {
          user: this.navParams.get('user'),
          signed: this.navParams.get('signed')
        });
        break;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
}
