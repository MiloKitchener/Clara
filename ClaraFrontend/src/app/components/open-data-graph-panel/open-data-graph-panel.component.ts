import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import {DatasetService} from '../../services/dataset/dataset.service';
import { Chart } from 'src/app/interfaces/chart';

@Component({
  selector: 'app-open-data-graph-panel',
  templateUrl: './open-data-graph-panel.component.html',
  styleUrls: ['./open-data-graph-panel.component.scss']
})
export class OpenDataGraphPanelComponent implements OnInit {
  public chart;
  public datasets: any = [];
  public ySelectedDataset;
  public ySelectedField;
  public xSelectedDataset;
  public xSelectedField;

  constructor(
    private dashboardService: DashboardService,
    private datasetService: DatasetService
  ) { }

  ngOnInit() {
    this.chart = new Chart();

    // GET datasets
    this.datasetService.getDatasets().then((res) => {
      this.datasets = res.items;
    });
  }

  selectChange(event) {
    if (event.source.id === 'yDatasetSelect') {
      this.ySelectedField = null;
    }
    if (event.source.id === 'xDatasetSelect') {
      this.xSelectedField = null;
    }
    if (this.ySelectedDataset && this.ySelectedField && this.xSelectedDataset && this.xSelectedField) {
      const dataset = [];
      let yData = null;
      let xData = null;
      this.dashboardService.getARCGISData(
        this.ySelectedDataset.api_url,
        this.ySelectedField.name,
      ).then((dataY) => {
        // @ts-ignore
        yData = JSON.parse(dataY.getARCGISData);
        this.dashboardService.getARCGISData(
          this.xSelectedDataset.api_url,
          this.xSelectedField.name,
        ).then((dataX) => {
            // @ts-ignore
          xData = JSON.parse(dataX.getARCGISData);
          yData.forEach((item, index) => {
            dataset.push({y: item, x: xData[index]});
          });
          this.chart.field1 = this.ySelectedField;
          this.chart.url1 = this.ySelectedDataset;
          this.chart.field2 = this.xSelectedField;
          this.chart.url2 = this.xSelectedDataset;
          this.chart.data = dataset;
          this.chart.name = this.ySelectedField.name + ' V ' + this.xSelectedField.name;
          this.chart.type = 'scatter';
          this.chart.category = 'open';
        });
      });
    }
  }
}
