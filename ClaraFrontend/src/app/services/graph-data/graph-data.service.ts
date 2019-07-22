import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GraphDataService {
  // class variables
  private datasets: any;
  private userCharts = [];
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

  getLiveDatasets() {
    return this.http.get<any>(environment.backendIP + 'datasets/?type=live');
  }

  // Returns a list of fields corresponding to a database parameter
  getFields(url: string) {
    return this.http.get(url + 'field_names/');
  }

  getLiveFields(url: string) {
    return this.http.get(url + 'matrix_info/get_fields/');
  }

  getLiveDevices(url: string) {
    return this.http.get(url + 'devices/');
  }

  // Returns the chart data associated with two fields
  getChartData(field1: string, field2: string, dataset1: string, dataset2: string) {
    return this.http.post(environment.backendIP + 'graphs/request_graph/', { field1, field2, dataset1, dataset2, name: 'hardcoded' });
  }

  // GETS user charts from DB
  async pullUserCharts() {
    var charts = [];
    this.http.get(environment.backendIP + 'graphs/user_graphs/').subscribe((res: any[]) => {
      charts = res;
    });
    for (var i = 0; i < charts.length; i++) {
      // pull datapoints from chart
      let datapoint = await this.getChartData(charts[i].field1, charts[i].field2, charts[i].dataset1, charts[i].dataset2).toPromise();
      this.userCharts.push(datapoint);
      console.log("Pushed chart");
    }
    this.userDataUpdate.emit(this.userCharts);
  }

  // Returns the chart data associated with a user
  getUserCharts() {
    return this.userCharts;
  }

  // adds a set of chart data to the userCharts list
  addUserChart(chartData: any, dataset1: string, field1: string, dataset2: string, field2: string) {
    // POST user chart changes
    const name: string = field2 + ' V ' + field1;
    return this.http.post(environment.backendIP + 'graphs/', { name, dataset1, field1, dataset2, field2 }).subscribe(
      () => {
        // Add Chart To List
        this.userCharts = null; // clear previous chart data
        this.pullUserCharts();
        this.userDataUpdate.emit(this.userCharts);
      }
    );
  }
}