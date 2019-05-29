import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GraphDataService {
  // class variables
  private datasets: any;
  private userChartData: any;
  public userDataUpdate = new EventEmitter();

  constructor(private http: HttpClient) {
    // GET datasets
    this.datasets = this.http.get(environment.backendIP + 'datasets/');
    // GET User Charts
    this.http.get(environment.backendIP + 'graphs/user_graphs/').subscribe((res: any[]) => {
      this.userChartData = res;
      alert(JSON.stringify(this.userChartData));
    });

    //this.userChartData = [];
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

  // Returns the chart data associated with a user
  getUserCharts() {
    return this.userChartData;
  }

  // adds a set of chart data to the userCharts list
  addUserChart(chartData: any, dataset1: string, field1: string, dataset2: string, field2: string) {
    // Add Chart To List
    //this.userChartData.push(chartData);

    // POST user chart changes
    var name: string = field1 + " V " + field2;
    this.http.post(environment.backendIP + 'graphs/', { name, dataset1, field1, dataset2, field2 });
    this.userDataUpdate.emit(this.userChartData);
  }
}
