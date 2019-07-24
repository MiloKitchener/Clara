import { Injectable } from '@angular/core';

// import classes
import { Dashboard } from 'src/app/classes/dashboard';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  private dashboardNames: string[];

  constructor() {
    // GET Dashboard Names
    this.dashboardNames = ["Main"];
  }

  getDashboard(dashboardName: string): Dashboard {
    // GET Dashboard
    var sampleJSONGetRes = {
      name: dashboardName,
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
          labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
          data: [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}, {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}]
        }, {
          type: "bar",
          name: "Chart 4",
          labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
          data: [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}, {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}]
        },
      ]
    };
    return sampleJSONGetRes;
  }

  addDashboardName(name: string) {
    if(name == null || name == "" || name == "Main") {
      alert("Error: Invalid Name");
    }
    else { // valid name
      this.dashboardNames.push(name);
    }
  }

  getDashboardNames() {
    return this.dashboardNames;
  }
}
