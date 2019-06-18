import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {FormBuilder, FormGroup} from '@angular/forms';
import {GraphDataService} from '../../services/graph-data/graph-data.service';

@Component({
  selector: 'app-live-data-graph-panel',
  templateUrl: './live-data-graph-panel.component.html',
  styleUrls: ['./live-data-graph-panel.component.scss']
})
export class LiveDataGraphPanelComponent implements OnInit {
  private newChartData = [];
  liveDataForm: FormGroup;
  datasets = [];
  fields = [];
  devices = [];

  constructor(
    private graphDataService: GraphDataService,
    private formBuilder: FormBuilder
  ) {
    this.liveDataForm = formBuilder.group({
      datasets: ['None'],
      fields: ['None'],
      devices: ['None'],
    });
  }

  ngOnInit() {
    // Get all the live datasets
    this.graphDataService.getLiveDatasets().subscribe((res) => {
      res.forEach((dataset) => {
        this.datasets.push(dataset);
      });
    });

    // Populates initial empty charts
    this.updateLiveChart();
  }

  // Updates the data in a the live line chart
  updateLiveChart() {
    const canvas: any = document.getElementById('liveChart');
    const ctx = canvas.getContext('2d');
    const lineChart = new Chart(ctx, {
      type: 'line',
      data: this.newChartData,
      options: {
        scales: {
          xAxes: [{
            type: 'time',
          }]
        }
      }
    });
  }

  submit() {
    // TODO: Submit POST request
  }

  onDatasetChange(dataset) {
    this.graphDataService.getLiveFields(dataset.parent_url).subscribe((res: any) => {
      this.fields = res;
    });
    this.graphDataService.getLiveDevices(dataset.parent_url).subscribe((res: any) => {
      this.devices = res;
    });
  }

  onFieldChange(field) {
    return;
  }
}
