import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth } from 'aws-amplify';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  public theme = 'dark';
  public userLoggedIn: boolean;
  public otpValue = '';
  public tabName = '';
  public otpConfig = {
    length: 6,
    allowNumbersOnly: true,
    inputStyles: {
      background: '#acd4f9',
      border: '3px solid #0c508d',
      color: 'black',
      fontSize: '25px',
      height: '50px',
      width: '50px',
      marginBottom: '10%'
    }
  };

  constructor(
    private globalService: GlobalService,
    private storage: Storage,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(val => {
      this.tabName = this.route.snapshot.params[`tabName`];
    });
  }

  ngOnInit() {
    this.globalService.theme.subscribe(resp => {
      this.theme = resp;
    });
    this.globalService.userLoggedIn.subscribe(resp => {
      this.userLoggedIn = resp;
    });
    this.isLoggedIn();
  }

  public onOtpChange(otp): void {
    console.log(otp);
    this.otpValue = otp;
  }

  public submitOtp(): void {
    // if (this.otpValue.length === 6) {
    //   if (this.otpValue === '00000') {
    //     alert('Login Successful');
    //     this.globalService.userLoggedIn.next(true);
    //     this.storage.set('isLoggedIn', true);
    //     localStorage.setItem('isLoggedIn', 'true');
    //     this.router.navigate(['/tabs/home']);
    //   }
    //   else {
    //     alert('Incorrect Otp');
    //   }
    // }
    if (this.tabName === 'register') {
      if (this.otpValue.length === 6) {
        try {
          Auth.confirmSignUp(localStorage.getItem('userName'), this.otpValue);
          console.log('Signup Successful...');
          this.router.navigateByUrl('/auth/login');
        } catch (error) {
          console.log('error confirming sign up', error);
          alert('Incorrect Otp');
        }
      } else {
        alert('Invalid Otp');
      }
    } else if (this.tabName === 'login') {
      try {
        Auth.confirmSignIn(JSON.parse(localStorage.getItem('loginDetails')), this.otpValue).then((code) => {
          console.log(code);
          alert('Login Successful');
          this.globalService.userLoggedIn.next(true);
          this.storage.set('isLoggedIn', true);
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/tabs/home']);
        }).catch((e) => {
          console.log(e);
          alert('Incorrect Otp');
        });
      } catch (error) {
        alert('Incorrect Otp');
      }
    }
  }

  public isLoggedIn(): void {
    this.storage.get('isLoggedIn').then(value => {
      this.userLoggedIn = value;
    });
    this.userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  public navigateToLogin(): void {
    this.globalService.logout();
  }

}
