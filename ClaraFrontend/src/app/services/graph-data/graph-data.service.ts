import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GraphDataService {

  // instance variables
  datasets = [
    { title: 'Traffic_Volumes' }
  ];

  constructor() {
    // query for database list
  }

  // returns a list of datasets from the database
  getDatasets() {
    return this.datasets;
  }
  
  // returns a list of fields corresponding to a database parameter
  getFields(datasetTitle: string) {
    return ['SPEED_LIMIT', 'AADT'];
  }

  // returns the chart data associated with two fields
  getChartData(xField: any, yField: any) {
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
