import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-panel',
  templateUrl: './graph-panel.component.html',
  styleUrls: ['./graph-panel.component.scss']
})
export class GraphPanelComponent implements OnInit {

  private graphTitle = "";
  private yAxisTitle = "";
  private xAxisTitle = "";
  private yFields = null;
  private xFields = null;

  private datasets = [
    {"title": "Temperature"},
    {"title": "Traffic"},
    {"title": "Weather"},
    {"title": "Wind Speed"}
  ]
  private fields = [
    {"dataset":"Temperature", "fields":["Temperature Field A"]},
    {"dataset":"Traffic", "fields":["Traffic Field A", "Traffic Field B"]},
    {"dataset":"Weather", "fields":["Weather Field A", "Weather Field B", "Weather Field C"]},
    {"dataset":"Wind Speed", "fields":["Wind Speed Field A", "Wind Speed Field B", "Wind Speed Field C"]}
  ]

  constructor() {
    this.yAxisTitle = "None";
    this.xAxisTitle = "None";
  }

  ngOnInit() {
    this.graphTitle = "Y-Axis V X-Axis";

    // Chart Script
    var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
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
    this.graphTitle = this.yAxisTitle + " V " + this.xAxisTitle;

    // get fields
    var found = 0;
    for(var field in this.fields) {
      /*if(field.dataset == title){
        found = 1;
        break;
      }*/
    }
    if(found == 0) {
      alert("No Fields Found Corresponding to Dataset " + title);
    }
  }

  setXAxis(title) {
    this.xAxisTitle = title;
    this.graphTitle = this.yAxisTitle + " V " + this.xAxisTitle;

    // get fields
    var found = 0;
    for(var field in this.fields) {
      /*if(field.dataset == title){
        found = 1;
        break;
      }*/
    }
    if(found == 0) {
      alert("No Fields Found Corresponding to Dataset " + title);
    }
  }

  addGraph() {
    if(this.yAxisTitle == "None" || this.xAxisTitle == "None") {
      alert("Please Specify X / Y Axis Values");
    }
    else {
      alert("added graph");
    }
  }
}
