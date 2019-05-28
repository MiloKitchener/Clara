import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { DatasetsComponent } from 'src/app/components/datasets/datasets.component';

@Injectable({
  providedIn: 'root'
})

export class GraphDataService {
  // class variables
  private datasets: any;
  private userChartData = [];
  public userDataUpdate = new EventEmitter();

  constructor(private http: HttpClient) {
    this.datasets = this.http.get(environment.backendIP + 'datasets/');
  }

  // Returns a list of datasets from the database
  getDatasets() {
    return this.datasets;
  }

  // Returns a list of fields corresponding to a database parameter
  getFields(datasetTitle: string, url: string) {
    // TODO: send datasetTitle
    return this.http.get(url + 'field_names/');
  }

  // Returns the chart data associated with two fields
  getChartData(field1: string, field2: string, dataset1: string, dataset2: string) {
    return this.http.post(environment.backendIP + 'graphs/request_graph/', {field1, field2, dataset1, dataset2, name: 'hardcoded'});
  }

  // adds a set of chart data to the userCharts list
  addUserChart(chartData: any) {
    this.userChartData.push(chartData);
    this.userDataUpdate.emit(this.userChartData);
  }

  // Returns the chart data associated with a user
  getUserCharts() {
    return this.userChartData;
  }
}
