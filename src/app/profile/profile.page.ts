import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public loginDisplay = true;
  public theme = 'dark';

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.globalService.theme.subscribe(resp => {
      this.theme = resp;
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
    alert('Temporary Login');
  }

  public register(): void {
    alert('Temporary Registration');
  }

}
