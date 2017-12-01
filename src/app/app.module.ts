import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { QueryPage } from '../pages/query/query';
import { CustomerListPage} from '../pages/customer-list/customer-list';
import { CustomerViewPage} from '../pages/customer-view/customer-view'
import { ProjectsPage } from '../pages/projects/projects';


import { Users } from '../providers/users';


@NgModule({
  declarations: [
    MyApp,
    HomePage,

    LoginPage,
    RegisterPage,
    QueryPage,
    CustomerListPage,
    CustomerViewPage,
    ProjectsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    QueryPage,
    CustomerListPage,
    CustomerViewPage,
    ProjectsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    //private provider
    Users
  ]
})
export class AppModule { }