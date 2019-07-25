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
  displayAddChartPanel: boolean;

  // inject the activatated route
  constructor(
    private route: ActivatedRoute,
    private _dashboardService: DashboardService
  ) { }

  ngOnInit() {
    // subscribe to the parameters observable
    this.route.paramMap.subscribe(params => {
      this.name = params.get('id');
      this.dashboard = this._dashboardService.getDashboard(this.name);
    });
    this.displayAddChartPanel = false;
  }

  toggleAddChartPanel(): void {
    if(this.displayAddChartPanel) {
      this.displayAddChartPanel = false;
    }
    else {
      this.displayAddChartPanel = true;
    }
  }

  setAsPrimaryChart(index: number) {
    var oldMainChart = this.dashboard.mainChart;
    this.dashboard.mainChart = this.dashboard.charts[index];
    this.dashboard.charts.splice(index, 1);
    if(oldMainChart.name != "") { // if dashboard had a main chart
      this.dashboard.charts.push(oldMainChart); 
    }
  }

  // deletes a chart at a specified index
  deleteChart(index: number) {
    this.dashboard.charts.splice(index, 1);
  }
}
