import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../animations/fade.animation';

import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [fadeAnimation] // registers the animation
})

export class MainComponent implements OnInit {
  // user profile vars
  private user: any;

  constructor(
    private logoutService: AuthService
  ) { }

  ngOnInit() {
    this.user = {
      "name": "William McKinnon",
      "title": "Smart City Developer",
      "pictureSrc": "assets/images/avatar.png"
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
}