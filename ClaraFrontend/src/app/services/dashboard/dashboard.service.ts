import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Dashboard } from 'src/app/interfaces/dashboard';

import { Chart } from 'src/app/interfaces/chart';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import {APIService} from '../../API.service';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private apollo: Apollo,
    private apiService: APIService
  ) { }

  public closePanel = new EventEmitter();

  public ARDUINO_MOISTURE_QUERY = gql`
     query getArduinoMoistures($uuid: ID!) {
      getArduinoMoistures(uuid: $uuid) {
        items {
          uuid
          ts
          deviceid
          battery
          moisture
          uptime
        }
      }
    }
  `;

  public ARDUINO_MOISTURE_SUB = gql`
      subscription NotifyArduinoMoisture($uuid: ID!) {
        notifyArduinoMoisture(uuid: $uuid) {
          uuid
          ts
          deviceid
          battery
          moisture
          uptime
        }
      }
    `;


  /************************
    Class Methods
   ***********************/

  // GET specific dashboard from list
  getDashboard(name: string) {
    return this.getDashboards().then(dashboards => {
      return dashboards.items.find(dashboard => dashboard.name === name);
    });
  }

  // GET Dashboards
  getDashboards() {
    return this.apiService.ListDashboards();
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
    return this.apiService.ListFields();
  }

  getSubscription(query) {
    return this.apollo.subscribe({
      query
    });
  }

  getWatchQuery(query, variables) {
    return this.apollo.watchQuery({
      query,
      variables
    });
  }

  getLiveDevices() {
    return this.apollo.watchQuery({
        query: gql`
          query ListDevices {
            listDevices {
              items {
                uuid,
                deviceid
                ts
                ... on ArduinoMoisture {
                  battery
                  moisture
                  uptime
                }
                ... on ArduinoCO2 {
                  battery
                  Co2
                  uptime
                }
                ... on ArduinoPH {
                  battery
                  pH
                  uptime
                }
              }
            }
          }
        `,
      })
      .valueChanges;
  }


  // Emits message to hide graph panel
  closeGraphPanel() {
    this.closePanel.emit();
  }


  // Add chart to currently opened dashboard, create copy of chart to avoid pointer related bugs
  addChart(chart: Chart) {
    let toAdd: Chart;
    toAdd = new Chart(chart);
    // TODO: Upload to backend
    // this.currentDashboard.charts.push(toAdd);
  }
}
