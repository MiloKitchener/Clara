import { Component, OnInit } from '@angular/core';

// Import service
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import {Dashboard} from '../../../classes/dashboard';

@Component({
  selector: 'app-dashboards-main',
  templateUrl: './dashboards-main.component.html',
  styleUrls: ['./dashboards-main.component.scss']
})

export class DashboardsMainComponent implements OnInit {

  public dashboards: Dashboard[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getDashboards().subscribe( data => {
      this.dashboards = data;
    });
  }

  addDashboard() {
    const name = prompt('What is the Dashboard\'s Name?');
    this.dashboardService.addDashboard(this.dashboards, name);
  }
}
