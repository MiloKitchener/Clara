import { Component, OnInit } from '@angular/core';

// import service
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboards-main',
  templateUrl: './dashboards-main.component.html',
  styleUrls: ['./dashboards-main.component.scss']
})

export class DashboardsMainComponent implements OnInit {

  constructor( private _dashboardService: DashboardService ) { }

  ngOnInit() { }

  addDashboard() {
    var name = prompt("What is the Dashboard's Name?");
    this._dashboardService.addDashboard(name);
  }
}