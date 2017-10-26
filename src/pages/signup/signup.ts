import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import { UserserviceProvider } from '../../providers/userservice/userservice';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [UserserviceProvider]
})
export class SignupPage {

  public skills: string;
  public email: string;
  public password: any;
  public fname: any;
  public lanme: any;
  public phone: any;
  public city: any;
  public state: any;
  public isJobSeeker: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserserviceProvider, public loadController: LoadingController, public toastController: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  createAccount() {
    var account = {
      fname: this.fname,
      lanme: this.lanme || '',
      skills: this.skills || '',
      email: this.email,
      password: this.password,
      phone: this.phone || '',
      city: this.city || '',
      state: this.state || '',
      isJobSeeker: this.isJobSeeker || ''
    };

    var that = this;

    var loader = this.loadController.create({
      content: "Please wait ..."
    });
    loader.present();

    that.userService.signupUserService(account).then(authData => {
        //successful
        loader.dismiss();
        that.navCtrl.setRoot(HomePage);
      }, error => {
        // failure
        let toast = this.toastController.create({
          message: error,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        that.password = ""
      }
    );
  }
}
