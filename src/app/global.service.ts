import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public theme = new BehaviorSubject<string>('white');
  public userLoggedIn = new BehaviorSubject<boolean>(false);
  public selectedRoom = new BehaviorSubject<number>(1);

  constructor(private storage: Storage, private router: Router) { }

  public logout(): void {
    this.userLoggedIn.next(false);
    localStorage.clear();
    this.storage.clear();
    this.router.navigate(['/tabs/login']);
  }
}
