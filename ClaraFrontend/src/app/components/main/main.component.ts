import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

import { User } from 'src/app/classes/user';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})

export class MainComponent implements OnInit {
  // user profile vars
  user: User;
  screenIcon: string;

  constructor(
    private _profileService: ProfileService,
    private logoutService: AuthService
  ) { }

  ngOnInit() {
    this.screenIcon = "fullscreen";
    this.user = this._profileService.getUser();
  }

  /*********************
   *  Class Methods
   ********************/

  // logs user out of the site, returns to login page
  public logout() {
    this.logoutService.logout();
    // Reload the current page without the browser cache
    location.reload(true);
  }

  public toggleFullScreen() {
    if(this.screenIcon == "fullscreen") {
      this.screenIcon = "fullscreen_exit";
    }
    else {
      this.screenIcon = "fullscreen";
    }
  }
}