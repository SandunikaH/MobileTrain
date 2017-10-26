import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserserviceProvider } from '../providers/userservice/userservice';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import * as firebase from 'firebase';
//declare var firebase:any;

// Initialize Firebase
export var config = {
  apiKey: "AIzaSyCGhaPKMPuXkqhnqj0dsYN-ehAhhtexNOI",
  authDomain: "mobiletrain-app.firebaseapp.com",
  databaseURL: "https://mobiletrain-app.firebaseio.com",
  projectId: "mobiletrain-app",
  storageBucket: "mobiletrain-app.appspot.com",
  messagingSenderId: "134618133706"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),   
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config) 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserserviceProvider,
    Geolocation
  ]
})
export class AppModule {}