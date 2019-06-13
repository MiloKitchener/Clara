import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fade.animation';

import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [fadeAnimation] // registers the animation
})

export class MainComponent implements OnInit {
  // user profile vars
  private user: User;
  private navDisplayed: boolean; // for mobile class methods

  constructor(
    private _profileService: ProfileService,
    private logoutService: AuthService
  ) { }

  ngOnInit() {
    this.user = this._profileService.getUser();
    this.navDisplayed = false;
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

  // returns state of router outlet (used for animations)
  public getRouterOutletState(outlet: any) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  // toggles the mobile navigation bar
  public toggleNav() {
    if (this.navDisplayed == false) { // shows nav
      this.navDisplayed = true;
    }
    else { // hide
      this.navDisplayed = false;
    }
  }

  // hides mobile navigation bar
  public hideNav() {
    this.navDisplayed = false;
  }
}