import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

import { GraphDataService } from 'src/app/services/graph-data/graph-data.service';

import { Dataset } from 'src/app/classes/dataset';
import { Field } from 'src/app/classes/field';

@Component({
  selector: 'app-graph-panel',
  templateUrl: './graph-panel.component.html',
  styleUrls: ['./graph-panel.component.scss']
})

export class GraphPanelComponent implements OnInit {

  // instance variables
  private datasets: Dataset[];
  private yFields: Field[];
  private xFields: Field[];
  private newChartData = [];

  private graphTitle: string;
  private yAxisTitle: string;
  private xAxisTitle: string;
  private yField: string;
  private xField: string;

  constructor(private graphDataService: GraphDataService) {
    // instantiate instance variables
    this.datasets = null;
    this.yFields = null;
    this.xFields = null;
    this.newChartData = null;

    this.graphTitle = 'Y-Axis V X-Axis';
    this.yAxisTitle = 'None';
    this.xAxisTitle = 'None';
    this.yField = 'Field';
    this.xField = 'Field';
  }

  ngOnInit() {
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
  setYAxis(title: string) {
    this.yAxisTitle = title;
    this.graphTitle = this.yAxisTitle + ' V ' + this.xAxisTitle;
    this.yField = 'Field';
    this.newChartData = null;
    this.updateChart();

    // get fields
    this.graphDataService.getFields(this.selectDataset(this.yAxisTitle).url).subscribe((res: any[]) => {
      this.yFields = res;
    });
  }


  // sets the x axis
  setXAxis(title: string) {
    this.xAxisTitle = title;
    this.graphTitle = this.yAxisTitle + ' V ' + this.xAxisTitle;
    this.xField = 'Field';
    this.newChartData = null;
    this.updateChart();

    // get fields
    this.graphDataService.getFields(this.selectDataset(this.xAxisTitle).url).subscribe((res: any[]) => {
      this.xFields = res;
    });
  }


  // sets the y field
  selectYField(title: string) {
    this.yField = title;

    if (this.xField !== 'Field') { // both fields selected
      this.queryTable();
    }
  }


  // sets the x field
  selectXField(title: string) {
    this.xField = title;

    if (this.yField !== 'Field') { // both fields selected
      this.queryTable();
    }
  }


  // returns a specified dataset from the list
  selectDataset(datasetTitle: string): Dataset {
    // search for dataset (ADD FASTER SEARCH ALGORITHM, DATASETS WILL BE IN ALPHABETICAL ORDER)
    for (let i = 0; i < this.datasets.length; i++) {
      if (this.datasets[i].name === datasetTitle) {
        return this.datasets[i];
      }
    }
  }


  // adds the graph to the user's dashboard
  addGraph() {
    if (this.yField === 'Field' || this.xField === 'Field' || this.newChartData == null) {
      alert('Please Specify X / Y Axis Values');
    } else { // add graph data to user charts
      this.graphDataService.addUserChart(this.newChartData, this.xAxisTitle, this.xField, this.yAxisTitle, this.yField);
    }
  }


  // queries database for new chart data, updates chart accordingly
  queryTable() {
    this.graphDataService.getChartData(this.xField, this.yField, this.xAxisTitle, this.yAxisTitle).subscribe((res: any[]) => {
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

  openTab(tabName) {
    // Declare all variables
    let tabcontent;
    let tablinks;

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
}
