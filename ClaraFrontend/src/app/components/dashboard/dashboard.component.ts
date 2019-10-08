import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import {MatDialog} from '@angular/material';
import {AddGraphDialogComponent} from '../add-graph-dialog/add-graph-dialog.component';
import {DeviceService} from '../../services/device/device.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public dashboard;

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    private deviceService: DeviceService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.dashboardService.getDashboard(params.get('name')).then(dashboard => {
        this.dashboard = dashboard;

        // Initialize chart data
        this.dashboard.charts.items.forEach((chart) => {
          this.getChartData(chart);
        });
        this.deviceService.subscribeIoTData().subscribe(subscription => {
          // @ts-ignore
          const data = subscription.value.data.onCreateIoTData;
          console.log(subscription);
          this.dashboard.charts.items.forEach((chart) => {
            if (!chart.data) {
              chart.data = [];
            }
            if (!chart.labels) {
              chart.labels = [];
            }
            chart.data.push(data[chart.field1]);
            chart.labels.push(data.ts);
          });
        });
      });
    });
  }

  openAddChartDialog() {
    const dialogRef = this.dialog.open(AddGraphDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== '') {
        if (result.category === 'open') {
          this.dashboardService.addOpenChart(result, this.dashboard.id).then((res) => {
            this.dashboard.charts.items.push(res);
            this.getChartData(res);
          });
        } else {
          this.dashboardService.addLiveChart(result, this.dashboard.id).then((res) => {
            this.dashboard.charts.items.push(res);
            this.getChartData(res);
          });
        }
      }
    });
  }

  getChartData(chart) {
    if (chart.category === 'open') {
      const dataList = [];
      let yData = null;
      let xData = null;
      this.dashboardService.getARCGISData(
        chart.dataset1,
        chart.field1,
      ).then((dataY) => {
        // @ts-ignore
        yData = JSON.parse(dataY.getARCGISData);
        this.dashboardService.getARCGISData(
          chart.dataset2,
          chart.field2,
        ).then((dataX) => {
            // @ts-ignore
          xData = JSON.parse(dataX.getARCGISData);
          yData.forEach((item, index) => {
            dataList.push({y: item, x: xData[index]});
          });
          chart.data = dataList;
        });
      });
    } else {
      this.deviceService.getIoTData(chart.dataset1, 5000).then((res) => {
        chart.data = [];
        chart.labels = [];
        res.items.forEach((item) => {
          chart.data.push(item[chart.field1]);
          chart.labels.push(item.ts);
        });
      });
    }
  }
}
