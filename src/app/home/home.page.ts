import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { roomsList } from '../shared/mocks/room-list.mock';
import { RoomsList } from '../shared/models/rooms-list.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public theme = 'dark';
  public selectedRoomId: number;
  public roomsList = roomsList;

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.globalService.theme.subscribe(resp => {
      this.theme = resp;
    });
    this.globalService.selectedRoom.subscribe(resp => {
      this.selectedRoomId = resp * 1;
    });
  }

  public addRoom(): void {
    alert(`A Room will be Added with the following details
Room Name as Bathroom,
Number Of Devices as 5,
id as ${roomsList.length + 1}`);
    this.roomsList.push({
      roomName: 'Bathroom',
      numOfDevices: 5,
      id: roomsList.length + 1
    });
  }

  public selectedRoom(): RoomsList {
    return roomsList.find(el => el.id === this.selectedRoomId);
  }

  public logout(): void {
    this.globalService.logout();
  }

}
