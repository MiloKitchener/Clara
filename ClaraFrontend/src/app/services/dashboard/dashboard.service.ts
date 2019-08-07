import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// import classes
import { Dashboard } from 'src/app/classes/dashboard';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor( private router: Router, private http: HttpClient ) {
    // GET Dashboard Names
    // this.dashboards = [{
    //   name: 'Main',
    // tslint:disable-next-line:max-line-length
    //   desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ut enim ac egestas. Quisque sit amet odio ornare, congue dui sit amet, ultricies nibh. Maecenas convallis ullamcorper efficitur. Aliquam blandit enim metus, quis tincidunt eros venenatis et. Vivamus sollicitudin tellus ac hendrerit volutpat. Fusce porta nunc risus, vestibulum fringilla velit pharetra at. Phasellus id urna quis lorem accumsan mollis.',
    //   tags: ['Digital', 'Smart City', 'Innovation', 'Co-op Student', 'Main'],
    //   charts: [
    //     {
    //       name: 'Chart Main',
    //       type: 'bar',
    //       labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    //       data: [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}, {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}]
    //     },
    //     {
    //       name: 'Chart 1',
    //       type: 'bar',
    //       labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    //       data: [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}, {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}]
    //     }, {
    //       name: 'Chart 2',
    //       type: 'bar',
    //       labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    //       data: [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}, {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}]
    //     }, {
    //       name: 'Chart 3',
    //       type: 'bar',
    //       labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    //       data: [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}, {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}]
    //     }, {
    //       type: 'bar',
    //       name: 'Chart 4',
    //       labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    //       data: [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}, {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}]
    //     }, {
    //       type: 'pie',
    //       name: 'Distributed World Population by Millions',
    //       labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
    //       data: [{
    //         label: 'Population (millions)',
    //         backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
    //         data: [2478, 5267, 734, 784, 433]
    //       }]
    //     }, {
    //       type: 'radar',
    //       name: 'Distribution in % of world population',
    //       labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
    //       data: [{
    //           label: '1950',
    //           fill: true,
    //           backgroundColor: 'rgba(179,181,198,0.2)',
    //           borderColor: 'rgba(179,181,198,1)',
    //           pointBorderColor: '#fff',
    //           pointBackgroundColor: 'rgba(179,181,198,1)',
    //           data: [8.77, 55.61, 21.69, 6.62, 6.82]
    //         }, {
    //           label: '2050',
    //           fill: true,
    //           backgroundColor: 'rgba(255,99,132,0.2)',
    //           borderColor: 'rgba(255,99,132,1)',
    //           pointBorderColor: '#fff',
    //           pointBackgroundColor: 'rgba(255,99,132,1)',
    //           data: [25.48, 54.16, 7.61, 8.06, 4.45]
    //         }]
    //     },
    //   ]
    // }];
  }

  getDashboard(dashboards: Dashboard[], dashboardName: string): Dashboard {
    return dashboards.find(o => o.name === dashboardName);
  }

  getDashboards() {
    return this.http.get<Dashboard[]>(environment.backendIP + 'dashboards/');
  }

  getData(params) {
    return this.http.post<[]>(environment.backendIP + 'graphs/request_graph/', params);
  }

  moveChartToDashboard(dashboards: Dashboard[], originDashboard: Dashboard, dashboardIndex: number, chartIndex: number) {
    const chart = originDashboard.charts[chartIndex];
    originDashboard.charts.splice(chartIndex, 1);
    dashboards[dashboardIndex].charts.push(chart);
  }

  addDashboard(dashboards: Dashboard[], name: string) {
    if (name != null) { // if user didn't hit cancel
      if (name === '') { // if name invalid
        alert('Please Provide a Name For the Dashboard');
      } else {
        // TODO: Add dashboard to database
        const newDashboard = new Dashboard(name);
        dashboards.push(newDashboard);
      }
    }
  }

  // Remove dashboard
  removeDashboard(dashboards: Dashboard[], dashboard: Dashboard): void {
    dashboards.splice(dashboards.indexOf(dashboard), 1);
    // Navigate back to main dashboard because this one does not exist
    this.router.navigateByUrl('/main');
  }
}
