import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-dashboards-main',
  templateUrl: './dashboards-main.component.html',
  styleUrls: ['./dashboards-main.component.scss']
})
export class DashboardsMainComponent implements OnInit {
  dashboards: string[];

  constructor( ) {
    this.dashboards = [];
  }

  ngOnInit() {
  
  }

  addDashboard() {
    var name = prompt("What is the Dashboard's Name?");
    this.dashboards.push(name);
  }
}