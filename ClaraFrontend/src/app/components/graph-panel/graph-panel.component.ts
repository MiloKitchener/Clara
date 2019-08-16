import { Component, OnInit } from '@angular/core';

import { Chart } from 'src/app/classes/chart';
import { Dataset } from 'src/app/classes/dataset';
import { Field } from 'src/app/classes/field';

import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-graph-panel',
  templateUrl: './graph-panel.component.html',
  styleUrls: ['./graph-panel.component.scss']
})

export class GraphPanelComponent implements OnInit {

  // instance variables
  private chart: Chart;

  private datasets: Dataset[];
  private yDataset: Dataset;
  private xDataset: Dataset;

  private yFields: Field[];
  private xFields: Field[];
  private yField: Field;
  private xField: Field;

  private graphTitle: string;

  private options = {
    responsive: true
  };

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    // instantiate instance variables
    this.chart = new Chart();
    this.datasets = null;
    this.yFields = null;
    this.xFields = null;
    this.yDataset = null;
    this.xDataset = null;
    this.yField = null;
    this.xField = null;

    this.graphTitle = 'Y-Axis V X-Axis';

    // GET datasets
    this.dashboardService.getDatasets().subscribe((res: any[]) => {
      this.datasets = res;
    });
  }


  /****************************
    Class Methods
  ****************************/


  // sets the y axis
  setYAxis(index: number) {
    this.yDataset = this.datasets[index];
    this.yField = null;
    this.chart.data = [];

    console.log(this.yDataset);

    // get fields
    this.dashboardService.getFields(this.yDataset.id.toString()).subscribe((res: any[]) => {
      this.yFields = res;
    });
  }


  // sets the x axis
  setXAxis(index: number) {
    this.xDataset = this.datasets[index];
    this.xField = null;
    this.chart.data = [];

    // get fields
    this.dashboardService.getFields(this.xDataset.id.toString()).subscribe((res: any[]) => {
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
    if (this.yField === null || this.xField === null || this.chart.data.length === 0) {
      alert('Please Specify X / Y Axis Values');
    } else { // close panel and add graph data to user charts
      this.dashboardService.addChart();
      this.closeGraphPanel();
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
      this.chart.data = res;
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
    this.dashboardService.closeGraphPanel();
  }
}
