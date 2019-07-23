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
      "Road",
      "Civil"
    ];
  }

  addDashboard() {
    var name = prompt("What is the Dashboard's Name?");
    if(name == null || name == "" || name == "Main") {
      alert("Error: Invalid Name");
    }
    else {
      this.dashboardNames.push(name);
    }
  }
}