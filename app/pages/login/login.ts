import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  constructor(private nav: NavController) {
    this.nav = nav;
  }

  createAccount() {
    this.nav.push(SignupPage);
  }

}
