import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GraphDataService {

  constructor(private http: HttpClient) {}

  // returns a list of datasets from the database
  getDatasets() {
    return this.http.get("http://35.182.196.173:8000/datasets/");
  }
  
  // returns a list of fields corresponding to a database parameter
  getFields(datasetTitle: string) {
    // TODO: send datasetTitle
    return this.http.get("http://35.182.196.173:8000/fields/");
  }

  // returns the chart data associated with two fields
  getChartData(field1: string, field2: string, dataset1: string, dataset2: string) {
    return this.http.post("http://35.182.196.173:8000/graph/", {field1, field2, dataset1, dataset2});
  }
}
