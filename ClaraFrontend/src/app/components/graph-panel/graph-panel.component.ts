import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

import { GraphDataService } from 'src/app/services/graph-data/graph-data.service';

import { Dataset } from 'src/app/classes/dataset';
import { Field } from 'src/app/classes/field';

import { DashboardService } from 'src/app/services/dashboard/dashboard.service';


import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-graph-panel',
  templateUrl: './graph-panel.component.html',
  styleUrls: ['./graph-panel.component.scss']
})

export class GraphPanelComponent implements OnInit {

  // instance variables
  datasets: Dataset[];
  yFields: Field[];
  xFields: Field[];

  yDataset: Dataset;
  xDataset: Dataset;
  yField: Field;
  xField: Field;

  newChartData = [];

  graphTitle: string;

  constructor(
    private graphDataService: GraphDataService,
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    // instantiate instance variables
    this.datasets = null;
    this.yFields = null;
    this.xFields = null;
    this.yDataset = null;
    this.xDataset = null;
    this.yField = null;
    this.xField = null;
    this.newChartData = null;

    this.graphTitle = 'Y-Axis V X-Axis';

    // GET datasets
    this.graphDataService.getDatasets().subscribe((res: any[]) => {
      this.datasets = res;
    });

    // Populates initial empty charts
    this.updateChart();
  }


  /****************************
    Class Methods
  ****************************/


  // sets the y axis
  setYAxis(index: number) {
    this.yDataset = this.datasets[index];
    this.yField = null;
    this.newChartData = null;
    this.updateChart();

    console.log(this.yDataset);

    // get fields
    this.graphDataService.getFields(this.yDataset.id.toString()).subscribe((res: any[]) => {
      this.yFields = res;
    });
  }


  // sets the x axis
  setXAxis(index: number) {
    this.xDataset = this.datasets[index];
    this.xField = null;
    this.newChartData = null;
    this.updateChart();

    // get fields
    this.graphDataService.getFields(this.xDataset.id.toString()).subscribe((res: any[]) => {
      this.xFields = res;
    });
  }


  // sets the y field
  selectYField(index: number) {
    this.yField = this.yFields[index];

    if (this.xField !== null) { // both fields selected
      this.queryTable();
    }
  }


  // sets the x field
  selectXField(index: number) {
    this.xField = this.xFields[index];

    if (this.yField !== null) { // both fields selected
      this.queryTable();
    }
  }


  // adds the graph to the user's dashboard
  addGraph() {
    if (this.yField === null || this.xField === null || this.newChartData == null) {
      alert('Please Specify X / Y Axis Values');
    } else { // add graph data to user charts
      alert("adding chart");
    }
  }


  // queries database for new chart data, updates chart accordingly
  queryTable() {
    this.dashboardService.getData({
      field1: this.xField.id.toString(),
      dataset1: this.xDataset.id.toString(),
      field2: this.yField.id.toString(),
      dataset2: this.yDataset.id.toString()
    }).subscribe(res => {
      this.newChartData = res;
      this.updateChart(); // update chart
    });
  }


  // updates the data in a the scatter chart
  updateChart() {
    const canvas: any = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');
    const scatterChart = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Scatter Dataset',
          data: this.newChartData
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


  openTab(tabName: string) {
    // Declare all variables
    let tabcontent: any;
    let tablinks: any;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName('tabcontent');
    for (const content of tabcontent) {
      content.style.display = 'none';
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName('tablinks');
    for (const tab of tablinks) {
      tab.className = tab.className.replace(' active', '');
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    let idTab = '';
    let idTabContent = '';
    if (tabName === 'Open Data') {
      idTab = 'openDataTab';
      idTabContent = 'openData';
    } else {
      idTab = 'liveDataTab';
      idTabContent = 'liveData';
    }
    document.getElementById(idTabContent).style.display = 'flex';
    document.getElementById(idTab).className += ' active';
  }

  closeGraphPanel() {
    this.graphDataService.closeGraphPanel();
  }
}
