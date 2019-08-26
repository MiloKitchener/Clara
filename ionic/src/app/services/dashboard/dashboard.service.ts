import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { Dashboard } from 'src/app/classes/dashboard';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  // GET Dashboards
  getDashboards() {
    return this.http.get<Dashboard[]>(environment.backendIP + 'dashboards/');
  }

  // GET specific dashboard from list
  getDashboard(dashboards: Dashboard[], dashboardName: string): Dashboard {
    return dashboards.find(o => o.name === dashboardName);
  }
}
