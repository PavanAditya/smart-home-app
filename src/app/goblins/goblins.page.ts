import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-goblins',
  templateUrl: './goblins.page.html',
  styleUrls: ['./goblins.page.scss'],
})
export class GoblinsPage implements OnInit {

  public theme = 'dark';

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.globalService.theme.subscribe(resp => {
      this.theme = resp;
    });
  }

  public logout(): void {
    this.globalService.logout();
  }

}
