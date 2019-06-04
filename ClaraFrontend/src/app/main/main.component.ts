import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  constructor(
    private logoutService: AuthService
  ) { }

  ngOnInit() { }

  // logs user out of the site, returns to login page
  logout() {
    this.logoutService.logout();
    // Reload the current page without the browser cache
    location.reload(true);
  }
}