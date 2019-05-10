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
  }

  setYAxis(title: string) {
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
