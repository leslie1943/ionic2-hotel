import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { QueryPage } from '../pages/query/query';
import { CustomerListPage } from '../pages/customer-list/customer-list';
import { CustomerViewPage } from '../pages/customer-view/customer-view'
import { ProjectsPage } from '../pages/projects/projects';
import { WelcomePage } from '../pages/welcome/welcome';
import { MainPage } from '../pages/main/main';

//Main to pages
import { MyLeaveRecordPage } from '../pages/my-leave-record/my-leave-record';
import { NewTemporalLeavePage } from '../pages/new-temporal-leave/new-temporal-leave';
import { TeamLeavePage } from '../pages/team-leave/team-leave';
import { OTRequestPage } from '../pages/ot-request/ot-request';
import { PersonalPage } from '../pages/personal/personal';

//My Leave Record Page to
import { NewLeavePage } from '../pages/new-leave/new-leave';


//Providers
import { Users } from '../providers/users';
import { Leaves } from '../providers/leaves';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    QueryPage,
    CustomerListPage,
    CustomerViewPage,
    ProjectsPage,
    WelcomePage,
    MainPage,
    MyLeaveRecordPage,
    NewTemporalLeavePage,
    TeamLeavePage,
    OTRequestPage,
    PersonalPage,
    NewLeavePage
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
    RegisterPage,
    QueryPage,
    CustomerListPage,
    CustomerViewPage,
    ProjectsPage,
    WelcomePage,
    MainPage,
    MyLeaveRecordPage,
    NewTemporalLeavePage,
    TeamLeavePage,
    OTRequestPage,
    PersonalPage,
    NewLeavePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    //private provider
    Users,Leaves
  ]
})
export class AppModule { }