import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-panel',
  templateUrl: './graph-panel.component.html',
  styleUrls: ['./graph-panel.component.scss']
})
export class GraphPanelComponent implements OnInit {

  graphTitle = "";
  yAxisTitle = "";
  xAxisTitle = "";

  constructor() {
    this.yAxisTitle = "None";
    this.xAxisTitle = "None";
  }

  ngOnInit() {
    this.graphTitle = "Y-Axis V X-Axis";
  }

  setYAxis(title) {
    this.yAxisTitle = title;
    this.graphTitle = this.yAxisTitle + " V " + this.xAxisTitle;
  }

  setXAxis(title) {
    this.xAxisTitle = title;
    this.graphTitle = this.yAxisTitle + " V " + this.xAxisTitle;
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
