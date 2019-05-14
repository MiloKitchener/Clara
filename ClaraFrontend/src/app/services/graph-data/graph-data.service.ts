import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dataset } from 'src/app/classes/dataset';

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
    return this.http.get("http://35.182.196.173:8000/fields/");
  }

  // returns the chart data associated with two fields
  getChartData(xField: string, yField: string) {
    return [{
        x: -10,
        y: 0
      }, {
        x: 0,
        y: 10
      }, {
        x: 10,
        y: 5
    }];
  }
}
