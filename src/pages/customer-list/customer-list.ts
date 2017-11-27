import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomerViewPage } from '../customer-view/customer-view';
import { Users } from '../../providers/users';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { HomePage } from '../home/home';


/**
 * Generated class for the AvailableRoomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-list',
  templateUrl: 'customer-list.html',
})
export class CustomerListPage {
  users: any;
  user: any;
  signed: any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, public userServices: Users) {
    //Get parameters from last page.
    this.users = this.navParams.get("users");
    this.user = this.navParams.get("user");
    this.signed = this.navParams.get("signed");
  }

  //View user details.
  viewUser(user) {
    this.navCtrl.push(CustomerViewPage, {
      //send parameters
      signed: this.signed,
      user: user,
      details: this.navParams.get('details')
    });
  }

  //Delete user
  deleteUser(delUser) {
    //Delete loading.
    let loading = this.loadingCtrl.create({
      content: "Deleting user..."
    });
    loading.present();
    
    //call user delete service
    this.userServices.userDelete(delUser).then(data => {
      loading.dismiss();
      this.navCtrl.push(HomePage, {
        //send parameters
        signed: this.signed,
        user: this.user
      })
    }, (err) => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerListPage');
  }

}
