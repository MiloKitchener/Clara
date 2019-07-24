import { Injectable } from '@angular/core';

// import classes
import { Dashboard } from 'src/app/classes/dashboard';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  private dashboards: Dashboard[];

  constructor() {
    // GET Dashboard Names
    this.dashboards = [{
      name: "Main",
      mainChart: {
        name: "Chart Main",
        type: "bar",
        labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        data: [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}, {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}]
      },
      charts: [ {
          name: "Chart 1",
          type: "bar",
          labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
          data: [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}, {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}]
        }, {
          name: "Chart 2",
          type: "bar",
          labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
          data: [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}, {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}]
        }, {
          name: "Chart 3",
          type: "bar",
          labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
          data: [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}, {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}]
        }, {
          type: "bar",
          name: "Chart 4",
          labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
          data: [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}, {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}]
        }, {
          type: "bar",
          name: "Chart 5",
          labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
          data: [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}, {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}]
        },
      ]
    }];
  }

  getDashboard(dashboardName: string): Dashboard {
    var dashboard = this.dashboards.find(o => o.name == dashboardName);
    return dashboard;
  }
  getDashboards() {
    return this.dashboards;
  }

  setAsPrimaryChart(dashboard: Dashboard, index: number) {
    var oldMainChart = dashboard.mainChart;
    dashboard.mainChart = dashboard.charts[index];
    dashboard.charts.splice(index, 1);
    dashboard.charts.push(oldMainChart);
  }

  addDashboard(name: string) {
    var newDashboard = new Dashboard(name);
    this.dashboards.push(newDashboard);
  }
}
