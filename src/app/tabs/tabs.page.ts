import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  public userLoggedIn: boolean;

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
    this.globalService.userLoggedIn.subscribe(resp => {
      this.userLoggedIn = resp;
    });
  }

}
