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
  navDisplayed: boolean; // for mobile class methods
  dashboardDropdown: boolean;
  alexaDropdown: boolean;

  constructor(
    private _profileService: ProfileService,
    private logoutService: AuthService
  ) { }

  ngOnInit() {
    this.user = this._profileService.getUser();
    this.navDisplayed = false;
    this.dashboardDropdown = false;
    this.alexaDropdown = false;

    // checks if on mobile by topbar visibility, if so, hide navbar
    if (window.innerHeight > window.innerWidth) { // if portrait
      this.navDisplayed = false;
    }
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
}