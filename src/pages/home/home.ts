import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { CreatePage } from '../create/create';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  openSearch() {
    this.navCtrl.push(SearchPage);
  }

  openCreate(){
    this.navCtrl.push(CreatePage);
  }

  openLogin(){
    this.navCtrl.push(LoginPage);
  }

  openRegister(){
    this.navCtrl.push(RegisterPage);
  }
}