import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as socket from 'socket.io-client';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {
  
  }
}
