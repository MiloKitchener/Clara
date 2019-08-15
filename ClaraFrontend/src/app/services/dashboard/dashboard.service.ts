import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// import classes
import { Dashboard } from 'src/app/classes/dashboard';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor( private router: Router, private http: HttpClient ) { }


  getDashboard(dashboards: Dashboard[], dashboardName: string): Dashboard {
    return dashboards.find(o => o.name === dashboardName);
  }


  getDashboards() {
    return this.http.get<Dashboard[]>(environment.backendIP + 'dashboards/');
  }


  // returns the datapoints from a chart specified in the parameters
  getData(params: any) {
    return this.http.post<[]>(environment.backendIP + 'graphs/request_graph/', params);
  }


  moveChartToDashboard(dashboards: Dashboard[], originDashboard: Dashboard, dashboardIndex: number, chartIndex: number) {
    const chart = originDashboard.charts[chartIndex];
    originDashboard.charts.splice(chartIndex, 1);
    dashboards[dashboardIndex].charts.push(chart);
  }


  addDashboard(dashboards: Dashboard[], name: string) {
    if (name != null) { // if user didn't hit cancel
      if (name === '') { // if name invalid
        alert('Please Provide a Name For the Dashboard');
      } else {
        // TODO: Add dashboard to database
        const newDashboard = new Dashboard(name);
        dashboards.push(newDashboard);
      }
    }
  }


  // Remove dashboard
  removeDashboard(dashboards: Dashboard[], dashboard: Dashboard): void {
    dashboards.splice(dashboards.indexOf(dashboard), 1);
    // Navigate back to main dashboard because this one does not exist
    this.router.navigateByUrl('/main');
  }
}
