import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public loginDisplay = true;
  public theme = 'dark';
  public userLoggedIn: boolean;

  // ? Login Details
  public loginName: string;
  public loginPwd: string;
  // ? Login Details

  // ? Register Details
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
    this.globalService.theme.subscribe(resp => {
      this.theme = resp;
    });
    this.globalService.userLoggedIn.subscribe(resp => {
      this.userLoggedIn = resp;
    });
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
      alert('Temporary Login');
      this.globalService.userLoggedIn.next(true);
      this.storage.set('loginName', this.loginName);
      localStorage.setItem('loginName', this.loginName);
      this.storage.set('isLoggedIn', true);
      localStorage.setItem('isLoggedIn', 'true');
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
