// import angular dependencies
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import classes
import { Dashboard } from 'src/app/classes/dashboard';
import { Chart } from 'src/app/classes/chart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  // class variables
  name: string;
  dashboard: Dashboard;

  dashboards = ["DB1", "DB2", "DB3"];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  // inject the activatated route
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // subscribe to the parameters observable
    this.route.paramMap.subscribe(params => {
      this.name = params.get('id');
    });

    // GET Dashboard
    var sampleJSONGetRes = {
      name: this.name,
      mainChart: {
        type: "bar",
        labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        data: [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}, {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}]
      },
      charts: [ {
          type: "bar",
          labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
          data: [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}, {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}]
        }, {
          type: "bar",
          labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
          data: [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}, {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}]
        }, {
          type: "bar",
          labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
          data: [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}, {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}]
        }, {
          type: "bar",
          labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
          data: [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}, {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}]
        }, {
          type: "bar",
          labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
          data: [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}, {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}]
        },
      ]
    };
    this.dashboard = sampleJSONGetRes;
  }

  // deletes a chart at a specified index
  deleteChart(index: number) {
    this.dashboard.charts.splice(index, 1);
  }
}
