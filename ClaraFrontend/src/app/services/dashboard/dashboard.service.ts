import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Dashboard } from 'src/app/interfaces/dashboard';

import { Chart } from 'src/app/interfaces/chart';
import {APIService, ListDashboardsQuery} from '../../API.service';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(
    private router: Router,
    private apiService: APIService
  ) { }

  // GET specific dashboard from list
  getDashboard(name: string) {
    return this.getDashboards().then(dashboards => {
      return dashboards.items.find(dashboard => dashboard.name === name);
    });
  }

  // GET Dashboards
  getDashboards(): Promise<ListDashboardsQuery> {
    return this.apiService.ListDashboards(null, 1000);
  }

  // GET the datapoints for a field specified in the parameters
  getARCGISData(dataset, field) {
    return this.apiService.GetArcgisData(dataset, field);
  }

  // moves a chart from one dashboard to another
  moveChartToDashboard(originDashboard: Dashboard, dashboardIndex: number, chartIndex: number) {
    const chart = originDashboard.charts[chartIndex];
    originDashboard.charts.splice(chartIndex, 1);
    // dashboards[dashboardIndex].charts.push(chart);
    // TODO: push changes to database
  }

  // Add a dashboard
  addDashboard(name: string, desc: string) {
    return this.apiService.CreateDashboard({name, desc, tags: []});
  }

  // Remove dashboard
  removeDashboard(dashboard: Dashboard) {
    // dashboards.splice(dashboards.indexOf(dashboard), 1);
    // Navigate back to main dashboard after deletion
    this.router.navigateByUrl('/main').then();
    // TODO: push changes to database
  }

  // Returns a list of fields corresponding to a database parameter
  getFields(id: string) {
    return this.apiService.ListFields(null, 1000);
  }

  // Add chart to database
  addOpenChart(chart: Chart, dashboardID: string) {
    return this.apiService.CreateChart({
      name: chart.name,
      type: chart.type,
      category: chart.category,
      // @ts-ignore
      dataset1: chart.url1.api_url,
      // @ts-ignore
      dataset2: chart.url2.api_url,
      // @ts-ignore
      field1: chart.field1.name,
      // @ts-ignore
      field2: chart.field2.name,
      chartDashboardId: dashboardID
    });
  }

  // Add chart to database
  addLiveChart(chart: Chart, dashboardID: string) {
    return this.apiService.CreateChart({
      name: chart.name,
      type: chart.type,
      category: chart.category,
      dataset1: chart.url1,
      dataset2: chart.url2,
      field1: chart.field1,
      field2: chart.field2,
      chartDashboardId: dashboardID
    });
  }
}
