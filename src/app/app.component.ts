import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GlobalService } from './global.service';
import { roomsList } from './shared/mocks/room-list.mock';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private globalService: GlobalService
  ) {
    this.initializeApp();
    localStorage.setItem('isLoggedIn', `${(localStorage.getItem('isLoggedIn') === 'true')}`);
    localStorage.setItem('selectedRoom',
    `${((localStorage.getItem('selectedRoom') as any as number) * 1 < roomsList.length)
    ? (localStorage.getItem('selectedRoom'))
    : 1}`);
    this.globalService.userLoggedIn.next((localStorage.getItem('isLoggedIn') === 'true'));
    this.globalService.selectedRoom.next((localStorage.getItem('selectedRoom')) as any as number);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
