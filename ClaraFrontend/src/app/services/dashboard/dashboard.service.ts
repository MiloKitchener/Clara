import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Dashboard } from 'src/app/classes/dashboard';
import { environment } from './../../../environments/environment';

import { Chart } from 'src/app/classes/chart';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  // class variables
  private currentDashboard: Dashboard;
  private datasets: any;
  public closePanel = new EventEmitter();

  // constructor
  constructor( private router: Router, private http: HttpClient ) {
    // GET datasets
    this.datasets = this.http.get(environment.backendIP + 'datasets/');
  }


  /************************
    Class Methods
   ***********************/


  // setter for current dashboard
  setCurrentDashboard(dashboard: Dashboard): void {
    this.currentDashboard = dashboard;
  }


  // GET specific dashboard from list
  // replace with function in dashboard.component.ts?
  getDashboard(dashboards: Dashboard[], dashboardName: string): Dashboard {
    return dashboards.find(o => o.name === dashboardName);
  }


  // GET Dashboards
  getDashboards() {
    return this.http.get<Dashboard[]>(environment.backendIP + 'dashboards/');
  }


  // GET the datapoints from a chart specified in the parameters
  getData(params: any) {
    return this.http.post<[]>(environment.backendIP + 'graphs/request_graph/', params);
  }


  // moves a chart from one dashboard to another
  moveChartToDashboard(dashboards: Dashboard[], originDashboard: Dashboard, dashboardIndex: number, chartIndex: number) {
    const chart = originDashboard.charts[chartIndex];
    originDashboard.charts.splice(chartIndex, 1);
    dashboards[dashboardIndex].charts.push(chart);
    // TODO: push changes to database
  }


  // adds a dashboard
  addDashboard(name: string) {
    if (name != null) { // if user didn't hit cancel
      if (name === '') { // if name invalid
        alert('Please Provide a Name For the Dashboard');
      } else {
        const newDashboard = new Dashboard(name);
        // need to add dashboard via backend
      }
    }
  }


  // Remove dashboard
  removeDashboard(dashboards: Dashboard[], dashboard: Dashboard): void {
    dashboards.splice(dashboards.indexOf(dashboard), 1);
    // Navigate back to main dashboard after deletion
    this.router.navigateByUrl('/main');
    // TODO: push changes to database
  }


  // Returns a list of datasets from the database
  getDatasets() {
    return this.datasets;
  }


  // GET live datasets
  getLiveDatasets() {
    return this.http.get<any>(environment.backendIP + 'datasets/?type=live');
  }


  // Returns a list of fields corresponding to a database parameter
  getFields(id: string) {
    return this.http.get(environment.backendIP + 'datasets/' + id + '/field_names/');
  }


  // GET live dataset fields
  getLiveFields(url: string) {
    return this.http.get(url + 'matrix_info/get_fields/');
  }


  // GET live devices
  getLiveDevices(url: string) {
    return this.http.get(url + 'devices/');
  }


  // emits message to hide graph panel
  closeGraphPanel() {
    this.closePanel.emit();
  }


  // add chart to currently opened dashboard, create copy of chart to avoid pointer related bugs
  addChart(chart: Chart) {
    let toAdd: Chart;
    toAdd = new Chart(chart);
    // TODO: Upload to backend
    this.currentDashboard.charts.push(toAdd);
  }
}
