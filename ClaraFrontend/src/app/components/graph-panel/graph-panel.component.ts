import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph-panel',
  templateUrl: './graph-panel.component.html',
  styleUrls: ['./graph-panel.component.scss']
})
export class GraphPanelComponent implements OnInit {

  private graphTitle = '';
  // use y/x Dataset instead of x/y axistitle and x/y fields
  private yDataset: any;
  private xDataset: any;
  private yAxisTitle = '';
  private xAxisTitle = '';
  private yFields: any;
  private xFields: any;
  private yField = 'Field';
  private xField = 'Field';

  private datasets = [
    {title: 'Traffic_Volumes', fields: ['SPEED_LIMIT', 'AADT']}
  ];

  constructor() {
    this.yAxisTitle = 'None';
    this.xAxisTitle = 'None';

    this.yFields = this.datasets[0].fields;
    this.xFields = this.datasets[0].fields;
  }

  ngOnInit() {

    this.graphTitle = 'Y-Axis V X-Axis';

    // Chart Script
    const canvas: any = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
  }

  setYAxis(title) {
    this.yAxisTitle = title;
    this.graphTitle = this.yAxisTitle + ' V ' + this.xAxisTitle;
    this.yField = 'Field';

    // get fields
    var found = 0;
    // search

    if (found === 0) {
      alert('No Fields Found Corresponding to Dataset ' + title);
    }
  }

  setXAxis(title) {
    this.xAxisTitle = title;
    this.graphTitle = this.yAxisTitle + ' V ' + this.xAxisTitle;
    this.xField = 'Field';

    // get fields
    var found = 0;
    // search

    if (found === 0) {
      alert('No Fields Found Corresponding to Dataset ' + title);
    }
  }

  selectYField(title) {
    this.yField = title;

    if(this.xField != 'Field') { // both fields selected
      this.queryTable();
    }
  }

  selectXField(title) {
    this.xField = title;

    if(this.yField != 'Field') { // both fields selected
      this.queryTable();
    }
  }

  addGraph() {
    if (this.yAxisTitle === 'None' || this.xAxisTitle === 'None') {
      alert('Please Specify X / Y Axis Values');
    }
    else {
      alert('added graph');
    }
  }

  queryTable() {
    alert("Quering for table data with yfield " + this.yField + " and xfield " + this.xField);
  }
}
