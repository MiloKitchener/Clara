import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-splash',
  templateUrl: './dashboard-splash.component.html',
  styleUrls: ['./dashboard-splash.component.scss']
})
export class DashboardSplashComponent implements OnInit {
  // user profile vars
  private user: any;

  constructor() { }

  ngOnInit() {
    this.user = {
      "name": "William McKinnon",
      "title": "Smart City Developer",
      "pictureSrc": "assets/images/avatar.png"
    }
  }

}
