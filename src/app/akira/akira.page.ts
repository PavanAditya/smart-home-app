import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-akira',
  templateUrl: './akira.page.html',
  styleUrls: ['./akira.page.scss'],
})
export class AkiraPage implements OnInit {

  public theme = 'dark';

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.globalService.theme.subscribe(resp => {
      this.theme = resp;
    });
  }

}
