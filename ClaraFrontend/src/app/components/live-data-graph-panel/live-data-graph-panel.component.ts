import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-live-data-graph-panel',
  templateUrl: './live-data-graph-panel.component.html',
  styleUrls: ['./live-data-graph-panel.component.scss']
})
export class LiveDataGraphPanelComponent implements OnInit {
  private newChartData = [];
  private liveDatasetTitle: string;

  constructor() {
    this.liveDatasetTitle = 'None';
  }

  ngOnInit() {
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

}
