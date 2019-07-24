// import angular dependencies
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import classes
import { Dashboard } from 'src/app/classes/dashboard';

// import service
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  // class variables
  name: string;
  dashboard: Dashboard;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  // inject the activatated route
  constructor(
    private route: ActivatedRoute,
    private _dashboardService: DashboardService
  ) { }

  ngOnInit() {
    // subscribe to the parameters observable
    this.route.paramMap.subscribe(params => {
      this.name = params.get('id');
    });
    this.dashboard = this._dashboardService.getDashboard(this.name);
  }

  // deletes a chart at a specified index
  deleteChart(index: number) {
    this.dashboard.charts.splice(index, 1);
  }
}
