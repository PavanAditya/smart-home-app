import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginDisplay = 'welcome';
  public theme = 'dark';
  public userLoggedIn: boolean;

  // ? Login Details
  public loginName: string;
  public loginPwd: string;
  // ? Login Details

  // ? Register Details
  public regUserName: string;
  public regFirstName: string;
  public regLastName: string;
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
    this.regUserName = '';
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

  public changeDisplayCard(tabName: string): void {
    this.loginDisplay = tabName;
  }

  public forgotPassword(): void {
    alert(`No Help will be done.
Try Remembring Passwords
😆😆`);
  }

  public login(): void {
    // if (this.loginName === 'admin' && this.loginPwd === 'admin') {
    //   this.storage.set('loginName', this.loginName);
    //   localStorage.setItem('loginName', this.loginName);
    //   this.router.navigate(['/tabs/otp']);
    // } else {
    //   alert(`Wrong LoginName or Password`);
    // }
    Auth.signIn(this.loginName, this.loginPwd).then(res => {
      this.storage.set('loginDetails', JSON.stringify(res));
      localStorage.setItem('loginDetails', JSON.stringify(res));
      console.log('User Details. ', res);
      alert('Login Succesful. Proceed to Multi Factor Authentication');
      this.router.navigate(['/tabs/otp', 'login']);
    }).catch(err => {
      alert('Login Failed');
    }).finally(() => {
      alert('Login Failed');
    });
  }

  public register(): void {
    alert('Temporary Registration');
    const registerDetails = {
      username: this.regUserName,
      password: this.regPwd,
      attributes: {
        email: this.regMail,
        phone_number: this.regPh,
        family_name: this.regFirstName,
        given_name: this.regLastName,
        gender: 'Male'
      }
    };
    Auth.signUp(registerDetails).then(res => {
      this.storage.set('userName', JSON.stringify(this.regUserName));
      localStorage.setItem('userName', JSON.stringify(this.regUserName));
      console.log('Registration Successful', res);
      alert('Registration Successful. Proceed to MultiFactor authentication');
      this.router.navigate(['/tabs/otp', 'register']);
    }).catch(err => {
      alert('Registration Failed');
    });
  }

  public isLoggedIn(): void {
    this.storage.get('isLoggedIn').then(value => {
      this.userLoggedIn = value;
    });
    this.userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

}
