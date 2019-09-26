import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard/dashboard.service';
import { Dashboard } from '../classes/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {

  selectedDashboard: Dashboard;
  dashboards: Dashboard[];

  constructor(private dashboardService: DashboardService) {
    this.selectedDashboard = null;
  }

  ngOnInit() {
    this.dashboardService.getDashboards().subscribe( data => {
      this.dashboards = data;
      this.selectedDashboard = this.dashboardService.getDashboard(this.dashboards, "Main");
      console.log(this.selectedDashboard.charts);
    });
  }
}
