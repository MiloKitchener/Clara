import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

import { GraphDataService } from 'src/app/services/graph-data/graph-data.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})

export class UserDashboardComponent implements OnInit {
  chartsData = [];
  chartUpdated: boolean;

  constructor(private _graphDataService: GraphDataService) { }

  ngOnInit() {
    // instantiate instance variables
    this.chartUpdated = false;

    // add button action listener
    document.getElementById("addBtn").addEventListener("click", openGraphPanel);

    // update panel when charts are added
    this._graphDataService.userDataUpdate.subscribe(
      (userChartData: any) => {
        this.chartsData = this._graphDataService.getUserCharts();
        this.displayGraphs();
        this.chartUpdated = true;
      }
    );

    // updates panel on navigation to user Dashboard via router
    if (this.chartUpdated == false && this.chartsData != null) {
      this.chartsData = this._graphDataService.getUserCharts();
      this.displayGraphs();
      this.chartUpdated = true;
    }
  }

  /****************************
    Class Methods  
  ****************************/

  // method to populate the user graphs table
  async displayGraphs() {
    // hide add graph panel if it was just used to add a new graph
    if (document.getElementById("graphContainer").style.display == "block") {
      removeGraphPanel();
    }

    // hide "no saved charts" message if user has saved charts
    if (this.chartsData.length > 0) {
      var table = document.getElementById("chartsTable");
      table.innerHTML = "";

      var currentRow = null;
      for (var i = 0; i < this.chartsData.length; i++) {
        // pull datapoints from chart
        let datapoints = await this._graphDataService.getChartData(this.chartsData[i].field1, this.chartsData[i].field2, this.chartsData[i].dataset1, this.chartsData[i].dataset2).toPromise();
        // every two elements, create new row
        if (i % 2 == 0) {
          if (currentRow != null) {
            table.appendChild(currentRow);
          }
          currentRow = document.createElement("tr");
        }

        var newCell = document.createElement("td");
        newCell.style.backgroundColor = "white";
        newCell.style.borderRadius = "5px";
        newCell.style.padding = "15px";
        newCell.style.boxShadow = "0px 0px 46px -10px rgba(0,0,0,0.11)";

        var newChart = document.createElement("canvas")
        newChart.style.width = "450px";
        var ctx = newChart.getContext("2d");
        newCell.appendChild(newChart);

        var scatterChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{
              label: 'Scatter Dataset',
              data: datapoints,
              pointBackgroundColor: 'rgba(0, 178, 255, 0.2)',
              pointBorderColor: 'rgba(0, 178, 255, 0.2)'
            }]
          },
          options: {
            title: {
              display: true,
              text: this.chartsData[i].name,
            },
            scales: {
              xAxes: [{
                type: 'linear',
                position: 'bottom'
              }]
            }
          }
        });
        currentRow.appendChild(newCell);

        // add last row
        if (i == this.chartsData.length - 1) {
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
  setTimeout(function () {
    document.getElementById("graphContainer").style.display = "none";
  }, 1000);

  var addButton = document.getElementById("addBtn");
  addButton.innerHTML = "+";
  addButton.removeEventListener("click", removeGraphPanel);
  addButton.addEventListener("click", openGraphPanel);
}