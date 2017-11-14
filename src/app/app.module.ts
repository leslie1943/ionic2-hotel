import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AvailableRoomsPage } from '../pages/available-rooms/available-rooms';
import { BookingPage } from '../pages/booking/booking';
import { SearchPage } from '../pages/search/search';
import { CreatePage } from '../pages/create/create';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { Rooms } from '../providers/rooms';
import { Users } from '../providers/users';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AvailableRoomsPage,
    BookingPage,
    SearchPage,
    CreatePage,
    LoginPage,
    RegisterPage
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
    AvailableRoomsPage,
    BookingPage,
    SearchPage,
    CreatePage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    //private provider
    Rooms,Users
  ]
})
export class AppModule { }