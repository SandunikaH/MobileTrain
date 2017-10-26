import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import { UserserviceProvider } from '../../providers/userservice/userservice';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserserviceProvider]
})
export class LoginPage {

  public email: string;
  public password: string;

  constructor(public userService: UserserviceProvider, public toastController: ToastController, public loadController: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitLogin() {
    var that = this;

    var loader = this.loadController.create({
      content: "Please wait ...",
    });
    loader.present();

    this.userService.loginUserService(this.email, this.password).then(authData => {
      //successful
      loader.dismiss();
      that.navCtrl.setRoot(HomePage);
    }, error => {
      //failure
      loader.dismiss();
      let toast = this.toastController.create({
        message: error,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      that.password = ""
    });
  }

  resetPassword() {
    console.log('password');
    
  }

  redirectToSignUp() {
    this.navCtrl.push(SignupPage);
  }
}
