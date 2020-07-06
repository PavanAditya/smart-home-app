import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public theme = 'dark';

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.globalService.theme.subscribe(resp => {
      this.theme = resp;
    });
  }

  public changeTheme(): void {
    console.log('hello');
    console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.globalService.theme.next(this.theme);
  }

}
