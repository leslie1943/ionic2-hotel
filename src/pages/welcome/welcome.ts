import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { MainPage } from '../main/main';

/**
 * Generated class for the Create page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  //Slide parts.
  slides = [
    {
      title: 'Welcome to the IMT!',
      description: '<li class="li-left">Check your leave details</li> <li class="li-left">Create temporal leave</li><li class="li-left">Check your personal information</li><li class="li-left">OT details</li>',
      image: '../../assets/imgs/ica-slidebox-img-1.png'
    },
    {
      title: 'WSE leave and late policy',
      description: '<li><strong>1. Late come</strong></i><p><strong>Please</strong> notify assistant if can not arrive office on time(15 minutes are buffer time). Extra working hours are needed for late come</p>',
      image: '../../assets/imgs/ica-slidebox-img-1.png'
    },
    {
      title: 'WSE leave and late policy',
      description: '<li><strong>2. Training</strong></li><p><strong>Please</strong> send out training notification at least 1 day earlier, and arrange backup.</p>',
      image: '../../assets/imgs/ica-slidebox-img-2.png'
    },
    {
      title: 'WSE leave and late policy',
      description: '<li><strong>3. Leave:Sick/urgent leave</strong></li><p><strong>Notify</strong> assistant as early as possible.</p>' + '<p><strong>Planned</strong> leave: 1-3 days: Confirm with team leader before 3 days at least.</p>' + '<p><strong>More</strong> 3 days: Confirm with team leader before 1 week at least.</p>' + '<p<strong>Backup</strong> need to be arranged and notification email need to be sent out 1 day in advance.Out of office setup.</p>',
      image: '../../assets/imgs/ica-slidebox-img-3.png'
    },
    {
      title: 'WSE leave and late policy',
      description: '<li><strong>4. Working from Home</strong></li><p><strong>Not </strong>permitted.</p>' + '<p><strong>Special</strong> request need to discuss with manager and team leader.</p>' + '<p><strong>Any</strong> late/leave without notification as mentioned above will be counted as annual leave</p>',
      image: '../../assets/imgs/ica-slidebox-img-3.png'
    }


  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //get parameters from last page.
    console.log("[LOG]: Login user: " + JSON.stringify(this.navParams.get("user").mobile));
    console.log("[LOG]: Login _id: " + JSON.stringify(this.navParams.get("user")._id));
  }

  /**
   * go to main page.
   */
  toMain(){
    this.navCtrl.push(MainPage,{
      user: this.navParams.get('user'),
      signed: this.navParams.get('signed')
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
}
