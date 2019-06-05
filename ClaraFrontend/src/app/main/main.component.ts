import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
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

  // logs user out of the site, returns to login page
  logout() {
    this.logoutService.logout();
    // Reload the current page without the browser cache
    location.reload(true);
  }
}