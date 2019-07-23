import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboards-main',
  templateUrl: './dashboards-main.component.html',
  styleUrls: ['./dashboards-main.component.scss']
})
export class DashboardsMainComponent implements OnInit {
  dashboards: string[];

  constructor( ) { }

  ngOnInit() {
    this.dashboards = [];
  }

  addDashboard() {
    var name = prompt("What is the Dashboard's Name?");
    this.dashboards.push(name);
  }
}