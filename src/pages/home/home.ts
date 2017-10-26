import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabase } from 'angularfire2/database';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userData = []

  @ViewChild('map')mapRef: ElementRef;
  map: any;
  
  constructor(public navCtrl: NavController, private geo: Geolocation, private platform: Platform, private fireDB: AngularFireDatabase) {
    this.platform.ready().then(() => {
      this.geo.getCurrentPosition().then(resp => {
        var latitude = resp.coords.latitude;
        var longitude = resp.coords.longitude;
        console.log(latitude);
        console.log(longitude);   
        this.showMap(latitude, longitude);  
        console.log("after show map");
        
        this.addRealTimeUser(latitude, longitude);           
      }).catch(() => {
        console.log("Error while retrieving current location");        
      });
    });
  }

  ionViewDidLoad() {
    console.log(this.mapRef);    
  }

  showMap(latitude, longitude) {    
    const location = new google.maps.LatLng(latitude, longitude);
    console.log("inside show map");
    const options = {
      center: location,
      zoom: 15
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarker(location, this.map);
  }

  addMarker(position, map) {
    return new google.maps.Marker({
      position, map
    });
  }

  addRealTimeUser(latitude, longitude) {
    console.log(latitude);
    console.log(longitude);
    var currentTime = new Date(new Date().getTime()).toLocaleTimeString();
    console.log(currentTime);
        
  }
}
