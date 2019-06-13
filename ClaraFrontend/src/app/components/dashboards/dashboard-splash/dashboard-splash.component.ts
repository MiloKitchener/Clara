import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-splash',
  templateUrl: './dashboard-splash.component.html',
  styleUrls: ['./dashboard-splash.component.scss']
})
export class DashboardSplashComponent implements OnInit {
  // class variables
  selected: string;

  constructor() { }

  ngOnInit() {
    // initialize class variables
    this.selected = "User Dashboard"
  }

  // setter for selected class variable
  setSelected(option: string) {
    this.selected = option;
  }

}
