import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { roomsList } from '../shared/mocks/room-list.mock';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  public userLoggedIn: boolean;
  public selectedRoomId: number;
  public roomsList = roomsList;
  public currentUrl: string;

  constructor(private globalService: GlobalService, private router: Router) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((navigationEnd: NavigationEnd) => {
        this.currentUrl = navigationEnd.url;
      });
  }

  ngOnInit() {
    this.globalService.userLoggedIn.subscribe(resp => {
      this.userLoggedIn = resp;
    });
    this.globalService.selectedRoom.subscribe(resp => {
      this.selectedRoomId = resp * 1;
    });
  }

  public selectedRoom(): string {
    return this.roomsList.find(el => el.id === this.selectedRoomId).roomName;
  }

  public changeRoom(id: number): void {
    if (this.currentUrl !== '/tabs/home') {
      this.router.navigate(['/tabs/home']);
    }
    this.globalService.selectedRoom.next(id);
    localStorage.setItem('selectedRoom', `${id}`);
  }

}
