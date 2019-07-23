import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//import { Dashboard } from 'src/app/classes/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  //dashboard: Dashboard;
  name: string;

  // inject the activatated route
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // subscribe to the parameters observable
    this.route.paramMap.subscribe(params => {
      // TESTING
      console.log(params.get('dashboardID'));


      this.name = params.get('dashboardID');
    });
  }
}
