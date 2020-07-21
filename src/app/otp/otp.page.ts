import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  public theme = 'dark';
  public userLoggedIn: boolean;

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
    this.isLoggedIn();
  }

  public onOtpChange(otp): void {
    console.log(otp);
    if (otp.length === 5) {
      if (otp === '00000') {
        alert('Login Successful');
        this.globalService.userLoggedIn.next(true);
        this.storage.set('isLoggedIn', true);
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/tabs/home']);
      }
      else {
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

}
