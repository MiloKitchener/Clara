import { Component, OnInit } from '@angular/core';

import { Chart } from 'src/app/interfaces/chart';

import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import {DatasetService} from '../../services/dataset/dataset.service';

@Component({
  selector: 'app-graph-panel',
  templateUrl: './graph-panel.component.html',
  styleUrls: ['./graph-panel.component.scss']
})

export class GraphPanelComponent implements OnInit {
  public chart: Chart;

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


  /****************************
    Class Methods
  ****************************/

  // Adds the graph to the user's dashboard
  addGraph() {
    if (this.ySelectedField === null || this.xSelectedField === null || this.chart.data.length === 0) {
      alert('Please Specify X / Y Axis Values');
    } else {
      // Close panel and add graph data to user charts
      this.chart.name = this.ySelectedField.name + ' V ' + this.xSelectedField.name;
      this.dashboardService.addChart(this.chart);
      this.closeGraphPanel();
    }
  }

  // Controls tab switching functionality
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

  // Sends signal to close graph panel
  closeGraphPanel() {
    this.dashboardService.closeGraphPanel();
  }

  selectChange(event) {
    if (event.source.id === 'yDatasetSelect') {
      this.ySelectedField = null;
    }
    if (event.source.id === 'xDatasetSelect') {
      this.xSelectedField = null;
    }
    if (this.ySelectedDataset && this.ySelectedField && this.xSelectedDataset && this.xSelectedField) {
      this.dashboardService.getARCGISData(
        this.ySelectedDataset.api_url,
        this.ySelectedField.name
      ).then((res) => {
        console.log(res);
      });
    }
  }
}
