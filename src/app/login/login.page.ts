import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginDisplay = true;
  public theme = 'dark';
  public userLoggedIn: boolean;

  // ? Login Details
  public loginName: string;
  public loginPwd: string;
  // ? Login Details

  // ? Register Details
  public regFirstName: string;
  public regLastName: string;
  public regName: string;
  public regPh: string;
  public regMail: string;
  public regConfPwd: string;
  public regPwd: string;
  // ? Register Details

  constructor(
    private globalService: GlobalService,
    private storage: Storage,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginName = '';
    this.loginPwd = '';
    this.regName = '';
    this.regFirstName = '';
    this.regLastName = '';
    this.regPh = '';
    this.regMail = '';
    this.regPwd = '';
    this.regConfPwd = '';
    this.globalService.theme.subscribe(resp => {
      this.theme = resp;
    });
    this.globalService.userLoggedIn.subscribe(resp => {
      this.userLoggedIn = resp;
    });
    this.isLoggedIn();
  }

  publicdoRefresh(event): void {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  public changeDisplayCard(): void {
    this.loginDisplay = !this.loginDisplay;
  }

  public forgotPassword(): void {
    alert(`No Help will be done.
Try Remembring Passwords
😆😆`);
  }

  public login(): void {
    if (this.loginName === 'admin' && this.loginPwd === 'admin') {
      this.storage.set('loginName', this.loginName);
      localStorage.setItem('loginName', this.loginName);
      this.router.navigate(['/tabs/otp']);
    } else {
      alert(`Wrong LoginName or Password`);
    }
  }

  public register(): void {
    alert('Temporary Registration');
  }

  public isLoggedIn(): void {
    this.storage.get('isLoggedIn').then(value => {
      this.userLoggedIn = value;
    });
    this.userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

}
