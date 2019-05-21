import { Component, OnInit } from '@angular/core';

import { GraphDataService } from 'src/app/services/graph-data/graph-data.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  private chartsData = [];
  private chartsPanel: any;

  constructor(private _graphDataService: GraphDataService) { }

  ngOnInit() {
    // pulls user chart data
    this.chartsData = this._graphDataService.getUserCharts();

    document.getElementById("addBtn").addEventListener("click", openGraphPanel);
    this.chartsPanel = document.getElementById("userChartsFeed");

    if(this.chartsData.length == 0) { // user has no charts
      this.chartsPanel.innerHTML = "<h2 style='margin-top:150px;'>No Charts Have Been Saved</h2><p>Add A New Chart With The Button Below</p>";
    }

    else { // populate chartsPanel with charts
      displayGraphs();
    }

    // update panel when charts are added
    this._graphDataService.userDataUpdate.subscribe(
      (userChartData: any) => {
        this.chartsData = this._graphDataService.getUserCharts();
        displayGraphs();
      }
    );
  }
}

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

function displayGraphs() {
  alert("Updating charts panel");
  // hide "no saved charts" message if user has saved charts
  if(this.chartsData.length > 0) {
    this.chartsPanel.innerHTML = "";
  }
}