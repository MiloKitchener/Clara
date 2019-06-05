import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../animations/fade.animation';

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

  constructor(
    private _profileService: ProfileService,
    private logoutService: AuthService
  ) { }

  ngOnInit() {
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

  // returns state of router outlet (used for animations)
  public getRouterOutletState(outlet: any) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}