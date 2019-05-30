import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

import { GraphDataService } from 'src/app/services/graph-data/graph-data.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})

export class UserDashboardComponent implements OnInit {
  private chartsData = [];
  private chartsPanelText: string;

  constructor(private _graphDataService: GraphDataService) { }

  ngOnInit() {
    // instantiate instance variables
    this.chartsPanelText = "";

    // pulls user chart data
    this.chartsData = this._graphDataService.getUserCharts();

    // add button action listener
    document.getElementById("addBtn").addEventListener("click", openGraphPanel);

    // populate chartsPanel
    if(this.chartsData.length == 0) { // user has no charts
      this.chartsPanelText = "No Charts Have Been Saved, Add A New Chart With The Button Below";
    }
    else { // populate chartsPanel with charts
      this.displayGraphs();
    }

    // update panel when charts are added
    this._graphDataService.userDataUpdate.subscribe(
      (userChartData: any) => {
        this.chartsData = this._graphDataService.getUserCharts();
        this.displayGraphs();
      }
    );
  }

  /****************************
    Class Methods  
  ****************************/

  // method to populate the user graphs table
  displayGraphs() {
    // hide add graph panel if it was just used to add a new graph
    if(document.getElementById("graphContainer").style.display == "block") {
      removeGraphPanel();
    }

    // hide "no saved charts" message if user has saved charts
    if(this.chartsData.length > 0) {
      this.chartsPanelText = ""; // remove "no charts saved" message

      var table = document.getElementById("chartsTable");
      table.innerHTML = "";

      var currentRow = null;
      for(var i = 0; i < this.chartsData.length; i++) {
        // every two elements, create new row
        if(i % 2 == 0) {
          if(currentRow != null) {
            table.appendChild(currentRow);
          }
          currentRow = document.createElement("tr");
        }

        var newCell = document.createElement("td");
        var newChart = document.createElement("canvas")
        var ctx = newChart.getContext("2d");
        var scatterChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{
              label: 'Scatter Dataset',
              data: this.chartsData[i]
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

        newCell.appendChild(newChart);
        currentRow.appendChild(newCell);
  
        // add last row
        if(i == this.chartsData.length - 1) {
          table.appendChild(currentRow);
        }
      }
    }
  }
}


/****************************
  Event Listener Functions  
****************************/


// reveals the add graph panel
function openGraphPanel() {
  document.getElementById("graphContainer").style.animation = "reveal 1s cubic-bezier(0, 1, 0.5, 1) 1 normal forwards";
  document.getElementById("graphContainer").style.display = "block";

  var addButton = document.getElementById("addBtn");
  addButton.innerHTML = "-";
  addButton.removeEventListener("click", openGraphPanel);
  addButton.addEventListener("click", removeGraphPanel);
}

// hides the add graph panel
function removeGraphPanel() {
  document.getElementById("graphContainer").style.animation = "hide 1s cubic-bezier(0, 1, 0.5, 1) 1 normal forwards";
  // add one second delay to give animation time to finish
  setTimeout(function() {
    document.getElementById("graphContainer").style.display = "none";
  }, 1000);

  var addButton = document.getElementById("addBtn");
  addButton.innerHTML = "+";
  addButton.removeEventListener("click", removeGraphPanel);
  addButton.addEventListener("click", openGraphPanel);
}