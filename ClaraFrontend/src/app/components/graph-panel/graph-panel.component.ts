import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { GraphDataService } from 'src/app/services/graph-data/graph-data.service';

@Component({
  selector: 'app-graph-panel',
  templateUrl: './graph-panel.component.html',
  styleUrls: ['./graph-panel.component.scss']
})

export class GraphPanelComponent implements OnInit {

  // instance variables
  private datasets = [];
  private yFields = [];
  private xFields = [];
  private chartData = [];

  private graphTitle: string;
  private yAxisTitle: string;
  private xAxisTitle: string;
  private yField: string;
  private xField: string;

  constructor(private _graphDataService: GraphDataService) {
    // instantiate instance variables
    this.datasets = null;
    this.yFields = null;
    this.xFields = null;
    this.chartData = null;

    this.graphTitle = 'Y-Axis V X-Axis';
    this.yAxisTitle = 'None';
    this.xAxisTitle = 'None';
    this.yField = 'Field';
    this.xField = 'Field';
  }

  ngOnInit() {
    // GET datasets
    this.datasets = this._graphDataService.getDatasets();
    // Populates initial empty chart
    this.updateChart();
  }


  /****************************
    Class Functions  
  ****************************/


  // sets the y axis
  setYAxis(title: string) {
    this.yAxisTitle = title;
    this.graphTitle = this.yAxisTitle + ' V ' + this.xAxisTitle;
    this.yField = 'Field';

    // get fields
    this.yFields = this._graphDataService.getFields("");
  }

  // sets the x axis
  setXAxis(title: string) {
    this.xAxisTitle = title;
    this.graphTitle = this.yAxisTitle + ' V ' + this.xAxisTitle;
    this.xField = 'Field';

    // get fields
    this.xFields = this._graphDataService.getFields("");
  }

  // sets the y field
  selectYField(title: string) {
    this.yField = title;

    if(this.xField != 'Field') { // both fields selected
      this.queryTable();
    }
  }

  // sets the x field
  selectXField(title: string) {
    this.xField = title;

    if(this.yField != 'Field') { // both fields selected
      this.queryTable();
    }
  }

  // adds the graph to the user's dashboard
  addGraph() {
    if (this.yAxisTitle === 'None' || this.xAxisTitle === 'None') {
      alert('Please Specify X / Y Axis Values');
    }
    else {
      alert('added graph');
    }
  }

  // queries database for new chart data, updates chart accordingly
  queryTable() {
    this.chartData = this._graphDataService.getChartData(this.xField, this.yField);
    this.updateChart(); // update chart
  }

  // updates the data in a the scatter chart
  updateChart() {
    const canvas: any = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');
    var scatterChart = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Scatter Dataset',
          data: this.chartData
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom'
          }]
        }
      }
    });
  }
}
