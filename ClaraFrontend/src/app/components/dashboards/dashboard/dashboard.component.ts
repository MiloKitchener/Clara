import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Dashboard } from 'src/app/classes/dashboard';
import { Chart } from 'src/app/classes/chart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  //dashboard: Dashboard;
  name: string;
  dashboard: Dashboard;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true; 
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  // inject the activatated route
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // subscribe to the parameters observable
    this.route.paramMap.subscribe(params => {
      this.name = params.get('id');
    });

    // GET Dashboard
    var chart: {labels: string[], data: any[], type: string;} = {labels: this.barChartLabels, data:this.barChartData, type:this.barChartType};
    var charts = [];
    charts.push(chart);
    var tempDashboard: {name: string, charts: Chart[]} = {name: this.name, charts: charts};
    this.dashboard = tempDashboard;
  }
}
