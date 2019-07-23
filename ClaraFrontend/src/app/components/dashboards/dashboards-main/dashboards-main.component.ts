import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboards-main',
  templateUrl: './dashboards-main.component.html',
  styleUrls: ['./dashboards-main.component.scss']
})
export class DashboardsMainComponent implements OnInit {
  dashboardNames: string[];

  constructor( ) { }

  ngOnInit() {
    this.dashboardNames = [
      "Main",
      "Road Dashboard",
      "Civil Dashboard"
    ];
  }

  addDashboard() {
    var name = prompt("What is the Dashboard's Name?");
    this.dashboardNames.push(name);
  }
}