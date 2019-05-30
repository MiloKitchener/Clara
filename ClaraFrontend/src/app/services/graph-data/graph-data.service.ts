import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GraphDataService {
  // class variables
  private datasets: any;
  private userChartData = [];
  public userDataUpdate = new EventEmitter();

  constructor(private http: HttpClient) {
    // GET datasets
    this.datasets = this.http.get(environment.backendIP + 'datasets/');
    // GET User Charts
    this.pullUserCharts();
  }

  // Returns a list of datasets from the database
  getDatasets() {
    return this.datasets;
  }

  // Returns a list of fields corresponding to a database parameter
  getFields(url: string) {
    return this.http.get(url + 'field_names/');
  }

  // Returns the chart data associated with two fields
  getChartData(field1: string, field2: string, dataset1: string, dataset2: string) {
    return this.http.post(environment.backendIP + 'graphs/request_graph/', { field1, field2, dataset1, dataset2, name: 'hardcoded' });
  }

  // GETS user charts from DB
  pullUserCharts() {
    this.http.get(environment.backendIP + 'graphs/user_graphs/').subscribe((res: any[]) => {
      this.userChartData = res;
      this.userDataUpdate.emit(this.userChartData);
    });
  }

  // Returns the chart data associated with a user
  getUserCharts() {
    return this.userChartData;
  }

  // adds a set of chart data to the userCharts list
  addUserChart(chartData: any, dataset1: string, field1: string, dataset2: string, field2: string) {
    // POST user chart changes
    const name: string = field1 + ' V ' + field2;
    return this.http.post(environment.backendIP + 'graphs/', { name, dataset1, field1, dataset2, field2 }).subscribe(
      () => {
        // Add Chart To List
        this.userChartData = null;
        this.pullUserCharts();
        this.userDataUpdate.emit(this.userChartData);
      }
    );
  }
}
