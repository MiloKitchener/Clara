import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public dashboard;
  public displayAddChartPanel = false;
  private options = {
    responsive: true
  };


  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.dashboardService.getDashboard(params.get('name')).then(dashboard => {
        this.dashboard = dashboard;
      });
    });
        // this.dashboardService.setCurrentDashboard(this.dashboard);
        // for (const chart of this.dashboard.charts) {
        //   if (chart.type === 'scatter') {
        //     this.dashboardService.getARCGISData(
        //       chart.field1,
        //       chart.url1,
        //       chart.field2,
        //       chart.url2
        //     ).then(res => {
        //       console.log(res);
        //       // chart.data = res;
        //     });
        //   }
        // }

    // Hide graph panel when its closed button is pressed
    this.dashboardService.closePanel.subscribe(() => {
        this.toggleAddChartPanel();
    });
  }

  // Toggle the add chart panel
  toggleAddChartPanel() {
    this.displayAddChartPanel = !this.displayAddChartPanel;
  }
}
