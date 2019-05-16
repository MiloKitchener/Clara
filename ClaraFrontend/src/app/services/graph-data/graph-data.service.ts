import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GraphDataService {

  constructor(private http: HttpClient) {}

  // Returns a list of datasets from the database
  getDatasets() {
    return this.http.get(environment.backendIP + 'datasets/');
  }

  // Returns a list of fields corresponding to a database parameter
  getFields(datasetTitle: string, url) {
    // TODO: send datasetTitle
    return this.http.get(url + 'field_names/');
  }

  // Returns the chart data associated with two fields
  getChartData(field1: string, field2: string, dataset1: string, dataset2: string) {
    return this.http.post(environment.backendIP + 'graph/', {field1, field2, dataset1, dataset2});
  }
}
