import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Dashboard } from 'src/app/classes/dashboard';
import { Graph } from 'src/app/classes/graph';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  //dashboard: Dashboard;
  name: string;
  dashboard: Dashboard;

  // inject the activatated route
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // subscribe to the parameters observable
    this.route.paramMap.subscribe(params => {
      this.name = params.get('id');
    });

    // GET Dashboard
    this.dashboard.name = this.name;

    var graph: Graph;
    graph.labels = ["Pending", "InProgress", "OnHold", "Complete", "Cancelled"];
    graph.data = [21, 39, 10, 14, 16];
    graph.type = 'pie';

    this.dashboard.graphs.push(graph);
  }
}
