import { Component, OnInit } from '@angular/core';
import { GraphPanelComponent } from '../graph-panel/graph-panel.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("addBtn").addEventListener("click", openGraphPanel);
  }
}

// reveals the add graph panel
function openGraphPanel() {
  document.getElementById("graphContainer").style.display = "block";

  var addButton = document.getElementById("addBtn");
  addButton.innerHTML = "-";
  addButton.removeEventListener("click", openGraphPanel);
  addButton.addEventListener("click", removeGraphPanel);
}

// hides the add graph panel
function removeGraphPanel() {
  document.getElementById("graphContainer").style.display = "none";

  var addButton = document.getElementById("addBtn");
  addButton.innerHTML = "+";
  addButton.removeEventListener("click", removeGraphPanel);
  addButton.addEventListener("click", openGraphPanel);
  }